'use client';
import CourseCard from '@/components/courses/courseCard';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { CourseWithTeacher } from '@/lib/types';

export default function CourseSwiper({
  courses,
}: {
  courses: CourseWithTeacher;
}) {
  return (
    <div className='relative'>
      <Swiper
        spaceBetween={24}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
          768: {
            slidesPerView: 1.2,
          },
          1024: {
            slidesPerView: 2,
          },
          1440: {
            slidesPerView: 2.2,
          },
        }}
      >
        {courses.map((course) => (
          <SwiperSlide key={course.id}>
            <CourseCard
              course={course}
              className='grid grid-cols-1 xl:grid-cols-2 gap-3'
              cardTitleStyle='h-[208px]'
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper Navigation Buttons */}
      <div className='swiper-button-prev absolute top-1/2 left-[-10px] z-10 transform -translate-y-1/2 hidden lg:flex'>
        <button className='rounded-full bg-white p-2 shadow-md'>←</button>
      </div>
      <div className='swiper-button-next absolute top-1/2 right-[-10px] z-10 transform -translate-y-1/2 hidden lg:flex'>
        <button className='rounded-full bg-white p-2 shadow-md'>→</button>
      </div>
    </div>
  );
}
