'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, Loader2, CheckCircle } from 'lucide-react';
import { contactFormSchema } from '@/lib/validations';
import { sendEmail } from '@/lib/emailjs';
import { PURPOSE_OPTIONS } from '@/lib/constants';
import type { ContactFormData } from '@/lib/validations';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>(
    'idle'
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const result = await sendEmail(data);

    if (result.success) {
      setSubmitStatus('success');
      reset();
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } else {
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="section-container max-w-3xl">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">의뢰 문의</h2>
          <p className="text-text-secondary text-lg">
            프로젝트 의뢰나 문의사항이 있으시면 언제든지 연락주세요
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              이름 <span className="text-primary">*</span>
            </label>
            <input
              {...register('name')}
              id="name"
              type="text"
              className="input-field"
              placeholder="홍길동"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              이메일 <span className="text-primary">*</span>
            </label>
            <input
              {...register('email')}
              id="email"
              type="email"
              className="input-field"
              placeholder="example@email.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          {/* Purpose Dropdown */}
          <div>
            <label htmlFor="purpose" className="block text-sm font-medium mb-2">
              사용목적 <span className="text-primary">*</span>
            </label>
            <select {...register('purpose')} id="purpose" className="input-field">
              <option value="">선택해주세요</option>
              {PURPOSE_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.purpose && (
              <p className="mt-1 text-sm text-red-600">{errors.purpose.message}</p>
            )}
          </div>

          {/* Message Textarea */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              메시지 <span className="text-primary">*</span>
            </label>
            <textarea
              {...register('message')}
              id="message"
              rows={6}
              className="input-field resize-none"
              placeholder="원하시는 내용을 적어주세요. 작업 완료 희망 날짜가 있다면 함께 적어주세요."
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
            )}
          </div>

          <p className="text-sm text-text-muted">
            참고 이미지가 있다면 문의 후 받으시는 회신 메일에 첨부해서 보내주세요.
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin mr-2" size={20} />
                전송 중...
              </>
            ) : (
              <>
                <Send size={20} className="mr-2" />
                문의하기
              </>
            )}
          </button>

          {/* Success/Error Messages */}
          {submitStatus === 'success' && (
            <div className="flex items-center gap-2 p-4 bg-green-50 text-green-700 rounded-lg animate-fade-in">
              <CheckCircle size={20} />
              <p>문의가 성공적으로 전송되었습니다! 빠른 시일 내에 답변드리겠습니다.</p>
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="p-4 bg-red-50 text-red-700 rounded-lg animate-fade-in">
              <p>문의 전송에 실패했습니다. 다시 시도해주세요.</p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
