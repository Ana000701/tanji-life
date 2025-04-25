import Link from 'next/link';
import { redirect } from 'next/navigation';
import CourseCard from '@/components/courses/courseCard';
import { serializeCourse } from '@/lib/utils';
import { getAllCategoriesWithCourseAndTeacher } from '@/lib/actions/courses.actions';
import { Fragment } from 'react';

export default async function CategoriesPage({
  params,
}: {
  params: Promise<{ categoryName: string }>;
}) {
  const { categoryName } = await params;
  const decodedCategoryName = decodeURIComponent(categoryName);

  const categories = await getAllCategoriesWithCourseAndTeacher();
  if (!categories) {
    return redirect('/');
  }

  // 課程分類
  const categoryList = categories.map((category) => (
    <li key={category.id}>
      <Link
        href={`/courses/${category.name}`}
        className={`text-neutral-500 label-md xl:heading-sm text-nowrap pb-2 xl:pb-3 pt-1 xl:pt-2 px-2 ${
          decodedCategoryName === category.name &&
          'border-b-4 border-primary-600 text-neutral-950 '
        }`}
      >
        {category.name}
      </Link>
    </li>
  ));
  // 篩選課程
  const categoryFilter = categories.filter(
    (category) => category.name === decodedCategoryName
  );
  return (
    <>
      <header>
        <nav className='border-b border-neutral-200 overflow-x-scroll pb-3 xl:pb-3.5 '>
          <ul className='flex gap-2 xl:gap-6'>
            <li>
              <Link
                href='/courses'
                className={`text-neutral-500 label-md xl:heading-sm text-nowrap pb-2 xl:pb-3 pt-1 xl:pt-2 px-2 ${
                  !categoryName &&
                  'border-b-4 border-primary-600 text-neutral-950'
                }`}
              >
                所有領域
              </Link>
            </li>
            {categoryList}
          </ul>
        </nav>
      </header>
      <div className='py-6 xl:pb-12'>
        {/* 所有課程 */}
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 px-4 xl:px-0 items-center'>
          {!categoryName &&
            categories.map((category) => (
              <Fragment key={category.id}>
                {category.courses.map((course) => (
                  <CourseCard
                    key={course.id}
                    course={serializeCourse(course)}
                  />
                ))}
              </Fragment>
            ))}
        </div>
        {/* 課程分類 */}
        {categoryFilter.map((category) => (
          <Fragment key={category.id}>
            {category.courses.length !== 0 ? (
              <div
                className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 xl:px-0 items-center'
                key={category.id}
              >
                {category.courses.map((course) => (
                  <CourseCard
                    key={course.id}
                    course={serializeCourse(course)}
                  />
                ))}
              </div>
            ) : (
              <div className='heading-md text-center text-neutral-950'>
                目前沒有相關課程
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </>
  );
}
