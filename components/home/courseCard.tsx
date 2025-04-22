import Image from 'next/image';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';

export default function CourseCard({
  image,
  title,
  teacher,
  rating,
  people,
  duration,
  price,
}: {
  image: string;
  title: string;
  teacher: string;
  rating: number;
  people: number;
  duration: number;
  price: number;
}) {
  return (
    <Card className='p-0 border-0 rounded-none shadow-none grid grid-cols-1 lg:grid-cols-2 gap-3 xl:max-w-[546px]'>
      <CardHeader className='p-0 gap-0 grid-rows-1'>
        <CardTitle>
          <div className='rounded-xl overflow-hidden'>
            <Image src={image} alt='lesson_08' width={1344} height={896} />
          </div>
        </CardTitle>
        <CardDescription />
      </CardHeader>
      <CardContent className='p-0 flex flex-col justify-between'>
        <p className='heading-sm text-neutral-950'>{title}</p>

        <div className='flex flex-col gap-3'>
          <p className='p-sm text-neutral-700'>
            by <span>{teacher}</span>
          </p>
          <div className='flex gap-2'>
            <div className='flex gap-0.5'>
              <Image
                src='/icons/star.svg'
                alt='rating'
                width={20}
                height={20}
              />

              <p className='regular text-neutral-700'>{rating}</p>
            </div>
            <div className='flex gap-0.5'>
              <Image
                src='/icons/people.svg'
                alt='people'
                width={20}
                height={20}
              />
              <p className='regular text-neutral-700'>{people}人學習</p>
            </div>
            <div className='flex gap-0.5'>
              <Image
                src='/icons/clock.svg'
                alt='duration'
                width={20}
                height={20}
              />
              <p className='regular text-neutral-700'>{duration} 小時</p>
            </div>
          </div>
        </div>

        <p className='text-primary-600 heading-xs'>NT$ {price}</p>
      </CardContent>
    </Card>
  );
}
