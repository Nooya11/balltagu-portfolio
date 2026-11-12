'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, Loader2, CheckCircle } from 'lucide-react';
import { createContactFormSchema } from '@/lib/validations';
import { Lang, TEXT, purposeLabel } from '@/lib/i18n';
import { sendEmail } from '@/lib/emailjs';
import { PURPOSE_OPTIONS } from '@/lib/constants';
import type { ContactFormData } from '@/lib/validations';

export default function Contact({ lang = 'ko' }: { lang?: Lang }) {
  const t = TEXT[lang].contact;
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
    resolver: zodResolver(createContactFormSchema(lang)),
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.title}</h2>
          <p className="text-text-secondary text-lg">
            {t.lead}
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              {t.name} <span className="text-primary">*</span>
            </label>
            <input
              {...register('name')}
              id="name"
              type="text"
              className="input-field"
              placeholder={t.namePlaceholder}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              {t.email} <span className="text-primary">*</span>
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
              {t.purpose} <span className="text-primary">*</span>
            </label>
            <select {...register('purpose')} id="purpose" className="input-field">
              <option value="">{t.choose}</option>
              {PURPOSE_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {purposeLabel(option, lang)}
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
              {t.message} <span className="text-primary">*</span>
            </label>
            <textarea
              {...register('message')}
              id="message"
              rows={6}
              className="input-field resize-none"
              placeholder={t.messagePlaceholder}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
            )}
          </div>

          <p className="text-sm text-text-muted">
            {t.imageNote}
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
                {t.sending}
              </>
            ) : (
              <>
                <Send size={20} className="mr-2" />
                {t.submit}
              </>
            )}
          </button>

          {/* Success/Error Messages */}
          {submitStatus === 'success' && (
            <div className="flex items-center gap-2 p-4 bg-green-50 text-green-700 rounded-lg animate-fade-in">
              <CheckCircle size={20} />
              <p>{t.success}</p>
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="p-4 bg-red-50 text-red-700 rounded-lg animate-fade-in">
              <p>{t.error}</p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
