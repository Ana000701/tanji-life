'use server';

import { prisma } from '@/db/prisma';

// 取得課程分類
export async function getAllCategories() {
  try {
    const categories = await prisma.courseCategory.findMany();

    return categories;
  } catch (error) {
    console.error('無法正確取得課程分類', error);
  }
}

// 依據分類取得課程與講師資料
export async function getAllCategoriesWithCourseAndTeacher() {
  try {
    const categories = await prisma.courseCategory.findMany({
      include: {
        courses: {
          include: {
            teacher: true,
          },
        },
      },
    });

    return categories;
  } catch (error) {
    console.error('無法正確取得課程分類及課程資訊', error);
  }
}

// 取得上課人數最多的 2 筆課程
export async function getTopCourseByStudent() {
  try {
    const courses = await prisma.course.findMany({
      orderBy: { students: 'desc' },
      take: 2,
      include: {
        teacher: true,
      },
    });
    return courses;
  } catch (error) {
    console.error('無法正確取得所有課程', error);
  }
}

export async function getCourseTags(courseId: string) {
  try {
    const courseWithTags = await prisma.course.findUnique({
      where: { id: courseId },
      select: {
        tags: {
          select: {
            tag: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    });

    if (!courseWithTags) {
      throw new Error('找不到指定的課程');
    }

    // 取出標籤物件
    const tags = courseWithTags.tags.map((tagOnCourse) => tagOnCourse.tag);

    return tags;
  } catch (error) {
    console.error('[getCourseTags] 發生錯誤:', error);
    throw new Error('無法取得課程標籤');
  }
}
