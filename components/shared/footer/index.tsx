import Link from 'next/link';

import { APP_NAME } from '@/lib/constants';

import { Button } from '@/components/ui/button';

import Logo from '../header/logo';
import SocialList from './SocialList';
import LinkList from './LinkList';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='border-t bg-gray-50 dark:bg-background px-6 xl:px-0 py-6 md:py-12'>
      <div className='wrapper pb-6 grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 md:space-x-6 border-b'>
        <div className='flex flex-col justify-between'>
          <div>
            <Logo />
            <p className='mt-2'>人生的每一步，都要聰明理財</p>
          </div>
          <SocialList />
        </div>
        <LinkList />
      </div>
      <div className='wrapper mt-6 flex flex-col items-center md:flex-row md:gap-6'>
        <p className='text-base text-gray-950 font-normal '>
          © {currentYear} {APP_NAME} All Rights Reserved
        </p>
        <div className='space-x-2 md:space-x-6'>
          <Button
            asChild
            variant='link'
            className='text-gray-950 font-normal px-0'
          >
            <Link href='#'>隱私權政策</Link>
          </Button>
          <Button
            asChild
            variant='link'
            className='text-gray-950 font-normal px-0'
          >
            <Link href='#'>使用者條款</Link>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
