import { z } from 'zod';
import { Lang, TEXT } from '@/lib/i18n';

// 언어별 오류 문구로 폼 검증 스키마를 만든다
export const createContactFormSchema = (lang: Lang) => {
  const e = TEXT[lang].errors;
  return z.object({
    name: z.string().min(2, { message: e.nameMin }).max(50, { message: e.nameMax }),
    email: z.string().email({ message: e.email }),
    purpose: z.string().min(1, { message: e.purpose }),
    message: z.string().min(10, { message: e.messageMin }).max(1000, { message: e.messageMax }),
  });
};

export type ContactFormData = z.infer<ReturnType<typeof createContactFormSchema>>;
