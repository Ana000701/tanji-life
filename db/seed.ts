import { prisma } from './prisma';
import { sampleData } from './sample-data';

async function seedCourses() {
  for (const course of sampleData.courses) {
    // 查找關聯的分類與講師
    const category = await prisma.courseCategory.findUnique({
      where: { name: course.categoryName },
    });

    const teacher = await prisma.courseTeacher.findFirst({
      where: { name: course.teacherName },
    });

    if (!category || !teacher) {
      console.warn(
        `Skipping course "${course.name}" due to missing category or teacher`
      );
      continue;
    }
    // 建立課程
    const createdCourse = await prisma.course.create({
      data: {
        name: course.name,
        slug: course.slug,
        categoryId: category.id,
        teacherId: teacher.id,
        description: course.description ?? '',
        youWillLearn: course.youWillLearn,
        suitableFor: course.suitableFor,
        price: course.price,
        originalPrice: course.originalPrice,
        students: course.students,
        totalDuration: course.totalDuration,
        images: course.images,
      },
    });
    // 建立標籤關聯
    if (course.tags && course.tags.length > 0) {
      const tagRecords = await prisma.courseTag.findMany({
        where: {
          name: { in: course.tags },
        },
      });

      await prisma.courseTagOnCourse.createMany({
        data: tagRecords.map((tag) => ({
          courseId: createdCourse.id,
          tagId: tag.id,
        })),
      });
    }
    console.log(`Created course: ${course.name}`);
  }
}

async function main() {
  await prisma.account.deleteMany();
  await prisma.session.deleteMany();
  await prisma.verificationToken.deleteMany();
  await prisma.user.deleteMany();
  await prisma.courseTagOnCourse.deleteMany();
  await prisma.course.deleteMany();
  await prisma.courseCategory.deleteMany();
  await prisma.courseTeacher.deleteMany();
  await prisma.courseTag.deleteMany();

  await prisma.user.createMany({ data: sampleData.users });
  await prisma.courseCategory.createMany({
    data: sampleData.categories,
    skipDuplicates: true,
  });
  await prisma.courseTeacher.createMany({
    data: sampleData.CourseTeacher,
    skipDuplicates: true,
  });
  await prisma.courseTag.createMany({
    data: sampleData.CourseTag,
    skipDuplicates: true,
  });
  await seedCourses();

  console.log('Database seeded successfully');
}

main();
