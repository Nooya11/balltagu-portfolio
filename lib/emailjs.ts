import emailjs from '@emailjs/browser';

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
const autoReplyTemplateId = process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID;

// File을 Base64로 변환하는 함수
const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};

interface EmailData {
  name: string;
  email: string;
  purpose: string;
  message: string;
  attachments?: File[];
}

export const sendEmail = async (data: EmailData) => {
  try {
    // 이미지를 Base64로 변환
    let attachmentsBase64 = '';
    if (data.attachments && data.attachments.length > 0) {
      const base64Images = await Promise.all(
        data.attachments.map(async (file, index) => {
          const base64 = await fileToBase64(file);
          return `이미지 ${index + 1} (${file.name}):\n${base64}\n\n`;
        })
      );
      attachmentsBase64 = base64Images.join('');
    }

    // EmailJS로 이메일 전송
    const response = await emailjs.send(
      serviceId,
      templateId,
      {
        name: data.name,
        email: data.email,
        title: data.purpose,
        message: data.message + (attachmentsBase64 ? '\n\n첨부 이미지:\n' + attachmentsBase64 : ''),
      },
      publicKey
    );

    // 자동 응답 이메일 전송 (옵션)
    if (autoReplyTemplateId) {
      try {
        await emailjs.send(
          serviceId,
          autoReplyTemplateId,
          {
            to_email: data.email,
            to_name: data.name,
            purpose: data.purpose,
            message: data.message,
          },
          publicKey
        );
      } catch (autoReplyError) {
        console.warn('Auto-reply email failed:', autoReplyError);
        // 자동 응답 실패는 무시하고 계속 진행
      }
    }

    return { success: true, response };
  } catch (error) {
    console.error('EmailJS Error:', error);
    return { success: false, error };
  }
};
