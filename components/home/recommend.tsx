import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import { cn } from '@/lib/utils';
import { ReactElement } from 'react';

export default function Recommend({
  image,
  level,
  slogan,
  order,
  course1,
  course2,
}: {
  image: string;
  level: string;
  slogan: string;
  order?: string;
  course1: ReactElement;
  course2: ReactElement;
}) {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 lg:px-0 py-4 lg:py-12'>
      <div
        className={cn(
          'rounded-xl overflow-hidden w-full sm:min-w-[636px] lg:min-w-full justify-self-center',
          order
        )}
      >
        <Image
          src={image}
          alt={level}
          width={636}
          height={452}
          className='w-full h-full'
        />
      </div>
      <div className='flex flex-col gap-6 sm:min-w-[636px] lg:min-w-full justify-self-center'>
        <div className='flex flex-col md:flex-row justify-center md:justify-start gap-2 md:gap-3'>
          <div className='flex items-center'>
            <Image
              src='/icons/location.svg'
              alt='decorate'
              width={40}
              height={40}
            />
            <p className='heading-sm lg:heading-lg'>{level}</p>
          </div>
          <p className='p-sm lg:p-lg text-[#212529] dark:text-white md:self-end'>
            {slogan}
          </p>
        </div>
        <Carousel>
          <CarouselContent className='flex lg:flex-col gap-6'>
            <CarouselItem className='lg:basis-1/2'>{course1}</CarouselItem>
            <CarouselItem className='lg:basis-1/2'>{course2}</CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
