import { Prisma } from '../generated/prisma';

export type CourseOnly = Prisma.CourseGetPayload<{}>;

export type CourseWithTeacher = Prisma.CourseGetPayload<{
  include: { teacher: true };
}>;

export type CategoryWithCoursesAndTeacher = Prisma.CourseCategoryGetPayload<{
  include: {
    courses: {
      include: {
        teacher: true;
      };
    };
  };
}>;

export type SerializedCourse = {
  id: string;
  name: string;
  images: string[];
  teacher: { name: string };
  rating: string;
  students: number;
  totalDuration: string;
  price: string;
  originalPrice: string;
};
