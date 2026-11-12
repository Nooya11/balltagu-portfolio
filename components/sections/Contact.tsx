'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, Loader2, CheckCircle, X, Upload } from 'lucide-react';
import { contactFormSchema } from '@/lib/validations';
import { sendEmail } from '@/lib/emailjs';
import { PURPOSE_OPTIONS } from '@/lib/constants';
import type { ContactFormData } from '@/lib/validations';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>(
    'idle'
  );
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [filePreviews, setFilePreviews] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);

    if (files.length + selectedFiles.length > 3) {
      alert('최대 3개까지만 업로드 가능합니다.');
      return;
    }

    // Create previews
    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setFilePreviews([...filePreviews, ...newPreviews]);
    setSelectedFiles([...selectedFiles, ...files]);
    setValue('attachments', [...selectedFiles, ...files]);
  };

  // Remove file
  const removeFile = (index: number) => {
    const newFiles = selectedFiles.filter((_, i) => i !== index);
    const newPreviews = filePreviews.filter((_, i) => i !== index);
    setSelectedFiles(newFiles);
    setFilePreviews(newPreviews);
    setValue('attachments', newFiles);
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const result = await sendEmail({
      ...data,
      attachments: selectedFiles,
    });

    if (result.success) {
      setSubmitStatus('success');
      reset();
      setSelectedFiles([]);
      setFilePreviews([]);
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
              placeholder="원하시는 내용을 적어주세요. 작업 완료 희망 날짜나 참고용 이미지가 있다면 첨부해 주세요."
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
            )}
          </div>

          {/* Image Attachments */}
          <div>
            <label className="block text-sm font-medium mb-2">
              참고 이미지 첨부 (선택, 최대 3개)
            </label>
            <div className="space-y-4">
              {/* File Input Button */}
              <label className="btn-secondary cursor-pointer inline-flex">
                <Upload size={20} className="mr-2" />
                이미지 선택 ({selectedFiles.length}/3)
                <input
                  type="file"
                  accept="image/jpeg,image/jpg,image/png,image/gif"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                  disabled={selectedFiles.length >= 3}
                />
              </label>

              {/* File Previews */}
              {filePreviews.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {filePreviews.map((preview, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={preview}
                        alt={`Preview ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X size={16} />
                      </button>
                      <p className="text-xs text-text-muted mt-1 truncate">
                        {selectedFiles[index]?.name}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              <p className="text-xs text-text-muted">
                jpg, png, gif 파일만 가능 (각 파일 최대 5MB)
              </p>
            </div>
            {errors.attachments && (
              <p className="mt-1 text-sm text-red-600">
                {errors.attachments.message}
              </p>
            )}
          </div>

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
