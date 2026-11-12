import emailjs from '@emailjs/browser';

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
const autoReplyTemplateId = process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID;

interface EmailData {
  name: string;
  email: string;
  purpose: string;
  message: string;
}

export const sendEmail = async (data: EmailData) => {
  try {
    // EmailJS로 이메일 전송
    const response = await emailjs.send(
      serviceId,
      templateId,
      {
        name: data.name,
        email: data.email,
        title: data.purpose,
        message: data.message,
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
