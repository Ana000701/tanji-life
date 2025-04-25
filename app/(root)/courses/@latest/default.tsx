import { getTopCourseByStudent } from '@/lib/actions/courses.actions';
// import CourseSwiper from './courseSwiper';

export default async function LatestCoursesPage() {
  const courses = await getTopCourseByStudent();
  console.log(courses);
  return (
    <div className='wrapper py-6 xl:py-12 px-4 xl:px-0'>
      <p className='heading-sm text-neutral-950 xl:heading-lg mb-6'>
        近期熱門課程
      </p>
      {/* <CourseSwiper courses={courses} /> */}
    </div>
  );
}
