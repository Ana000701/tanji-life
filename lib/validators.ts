import { z } from 'zod';

// Schema for signing users in
export const signInFormSchema = z.object({
  email: z.string().email('無效信箱地址').min(3, '信箱必須大於 3 個字元'),
  password: z.string().min(6, '密碼必須大於 6 個字元'),
});

// Schema for signing up a user
export const signUpFormSchema = z
  .object({
    name: z.string().min(3, '會員名稱至少要 3 個字元'),
    email: z.string().min(3, '電子信箱至少要 3 個字元'),
    password: z.string().min(6, '密碼至少要 6 個字元'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '密碼不相符',
    path: ['confirmPassword'],
  });
