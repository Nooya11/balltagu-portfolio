import { z } from 'zod';

// 이미지 파일 검증 (최대 5MB, jpg/png/gif만)
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];

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

  attachments: z
    .array(
      z.instanceof(File)
        .refine((file) => file.size <= MAX_FILE_SIZE, {
          message: '각 파일은 5MB 이하여야 합니다.',
        })
        .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
          message: 'jpg, png, gif 파일만 업로드 가능합니다.',
        })
    )
    .max(3, { message: '최대 3개까지 업로드할 수 있습니다.' })
    .optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
