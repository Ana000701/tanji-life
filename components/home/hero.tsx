import Image from 'next/image';

import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';

export default function Hero() {
  return (
    <section className='bg-[url(/home/banner_01.jpg)] md:bg-[url(/home/banner_02.jpg)]  bg-cover bg-center bg-no-repeat'>
      <div className='wrapper pt-16 pb-[138px] md:py-48'>
        <div className='flex flex-col gap-3 px-4'>
          <div>
            <p className='text-white md:text-neutral-950 heading-md md:heading-2xl text-center md:text-left'>
              碳吉人生
            </p>
            <p className='text-white md:text-neutral-950 heading-md md:heading-2xl text-center md:text-left'>
              從學習理財開始
            </p>
          </div>
          <div className='rounded-full bg-linear-[rgba(0,0,0,.56)] p-3 flex gap-2 min-w-[343px] max-w-[451px] mx-auto md:mx-0'>
            <Label htmlFor='search'>
              <Image
                src='/icons/search-white.svg'
                alt='searchIcon'
                width={24}
                height={24}
              />
            </Label>
            <Input
              id='search'
              name='search'
              placeholder='熱門推薦'
              className='h-6 border-0 focus-visible:ring-0 text-white placeholder:text-neutral-100 '
            />
          </div>
          <div className='flex gap-3 md:px-0 mx-auto md:mx-0'>
            <Badge
              variant='outline'
              className='border-0 shadow-none rounded-full bg-linear-[rgba(0,0,0,.56)]  text-white cursor-pointer p-sm lg:p-lg px-3 md:px-5 py-2 md:py-3'
            >
              #新手入門
            </Badge>
            <Badge
              variant='outline'
              className='border-0 shadow-none rounded-full bg-linear-[rgba(0,0,0,.56)]  text-white cursor-pointer p-sm lg:p-lg px-3 md:px-5 py-2 md:py-3'
            >
              #2024推薦
            </Badge>
            <Badge
              variant='outline'
              className='border-0 shadow-none rounded-full bg-linear-[rgba(0,0,0,.56)]  text-white cursor-pointer p-sm lg:p-lg px-3 md:px-5 py-2 md:py-3'
            >
              #投資規劃
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
