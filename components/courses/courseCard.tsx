import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

import { SerializedCourse as Course } from '@/lib/types';
import { getCourseTags } from '@/lib/actions/courses.actions';
import { Badge } from '../ui/badge';

export default async function CourseCard({
  course,
  className,
  cardTitleStyle,
}: {
  course: Course;
  className?: string;
  cardTitleStyle?: string;
}) {
  const tags = await getCourseTags(course.id);

  return (
    <Card
      className={cn(
        'p-0 overflow-hidden rounded-[8px] border-0 shadow-none h-full  bg-transparent',
        className
      )}
    >
      <CardHeader className='px-0 flex'>
        <CardTitle className={cn('relative w-full h-[278px]', cardTitleStyle)}>
          <Image
            src={`${course.images.at(0)}`}
            alt='lesson_01'
            fill
            className='rounded-[8px] object-cover'
          />
        </CardTitle>
      </CardHeader>
      <CardContent className='px-0 flex flex-col gap-3 h-full'>
        <p className='heading-sm leading-7 text-neutral-950'>{course.name}</p>
        <p className='p-sm text-neutral-700 '>by {course.teacher.name}</p>
        <div className='space-x-2'>
          {tags.map((tag) => (
            <Badge
              key={tag.id}
              className='bg-[#E9ECEF] text-neutral-950 px-3 py-2 rounded-[10000px] h-8'
            >
              {tag.name}
            </Badge>
          ))}
        </div>

        <div className='flex gap-2'>
          <div className='flex gap-0.5'>
            <Image src='/icons/star.svg' alt='rating' width={20} height={20} />

            <p className='regular text-neutral-700'>{course.rating}</p>
          </div>
          <div className='flex gap-0.5'>
            <Image
              src='/icons/people.svg'
              alt='people'
              width={20}
              height={20}
            />
            <p className='regular text-neutral-700'>{course.students}人學習</p>
          </div>
          <div className='flex gap-0.5'>
            <Image
              src='/icons/clock.svg'
              alt='duration'
              width={20}
              height={20}
            />
            <p className='regular text-neutral-700'>
              {course.totalDuration} 小時
            </p>
          </div>
        </div>
        <div className='flex gap-3 items-end h-6 mt-auto'>
          <p className='text-primary-600 heading-xs'>NT$ {course.price}</p>
          <p className='text-neutral-700 font-semibold text-[14px] line-through'>
            NT$ {course.originalPrice}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
