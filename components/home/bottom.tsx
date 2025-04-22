import Link from 'next/link';
import { Button } from '../ui/button';

export default function Bottom() {
  return (
    <section className='bg-[url(/home/banner_03.jpg)] bg-cover bg-center bg-no-repeat'>
      <div className='bg-linear-to-r from-[rgba(0,0,0,.7)] from-0% to-[rgba(0,0,0,0)] to-100%'>
        <div className='wrapper py-[70px] md:py-40 px-4'>
          <p className='text-white heading-md md:heading-2xl mb-6'>
            別再讓錢為你帶來困擾，
            <br /> 讓我們一起碳大吉！
          </p>
          <Button asChild variant='secondary'>
            <Link
              href='/courses'
              className='text-neutral-950 dark:text-black label-md h-12 py-3 px-6 bg-white border-2 border-neutral-200'
            >
              探索課程
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
