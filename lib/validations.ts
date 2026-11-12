import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: '이름은 최소 2자 이상이어야 합니다.' })
    .max(50, { message: '이름은 50자를 초과할 수 없습니다.' }),

  email: z
    .string()
    .email({ message: '올바른 이메일 주소를 입력해주세요.' }),

  purpose: z
    .string()
    .min(1, { message: '사용목적을 선택해주세요.' }),

  message: z
    .string()
    .min(10, { message: '메시지는 최소 10자 이상이어야 합니다.' })
    .max(1000, { message: '메시지는 1000자를 초과할 수 없습니다.' }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
