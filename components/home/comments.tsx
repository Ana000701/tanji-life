import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import CommentCard from './commentCard';
import Title from './title';

import { comments } from '@/db/sampleData';

const CommentCards = comments.map((item) => (
  <CarouselItem
    className='sm:basis-1/2 lg:basis-1/3  2xl:basis-1/4 py-3'
    key={item.id}
  >
    <CommentCard {...item} />
  </CarouselItem>
));

export default function Comments() {
  return (
    <section>
      <div className='wrapper py-6 md:py-12'>
        <Title
          image='/home/title-icon-3.jpg'
          title='超過 1 萬位碳吉學員 5 ⭐ 好評'
        />
        <Carousel className='max-w-[90%] mx-auto'>
          <CarouselContent className='p-4'>{CommentCards}</CarouselContent>
          <CarouselPrevious className='hidden lg:block bg-primary-600 size-12' />
          <CarouselNext className='hidden lg:block bg-primary-600 size-12' />
        </Carousel>
      </div>
    </section>
  );
}
