import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { CourseWithTeacher } from './types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertToPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

export function formatError(error: any): string {
  if (error.name === 'ZodError') {
    // Handle Zod error
    const fieldErrors = Object.keys(error.errors).map((field) => {
      const message = error.errors[field].message;
      return typeof message === 'string' ? message : JSON.stringify(message);
    });

    return fieldErrors.join('. ');
  } else if (
    error.name === 'PrismaClientKnownRequestError' &&
    error.code === 'P2002'
  ) {
    // Handle Prisma error
    const field = error.meta?.target ? error.meta.target[0] : 'Field';
    return `${field.charAt(0).toUpperCase() + field.slice(1)} 已經被註冊`;
  } else {
    // Handle other errors
    return typeof error.message === 'string'
      ? error.message
      : JSON.stringify(error.message);
  }
}

// 將部分欄位類型數字轉字串
export function serializeCourse(course: CourseWithTeacher) {
  return {
    ...course,
    price: course.price.toString(),
    originalPrice: course.originalPrice.toString(),
    rating: course.rating.toString(),
    totalDuration: course.totalDuration.toString(),
  };
}
