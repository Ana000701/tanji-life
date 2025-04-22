import Link from 'next/link';
import { MenuIcon, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const Menu = () => {
  return (
    <div className='flex justify-end gap-3'>
      <nav className='hidden md:flex w-full max-w-xs gap-1'>
        <Button asChild variant='ghost'>
          <Link href='/cart'>
            <ShoppingCart />
          </Link>
        </Button>
        <Button
          asChild
          className='bg-primary-600 text-white hover:bg-primary-700 '
        >
          <Link href='/signin'>登入／註冊</Link>
        </Button>
      </nav>
      <nav className='md:hidden'>
        <Sheet>
          <SheetTrigger className='align-middle'>
            <MenuIcon />
          </SheetTrigger>
          <SheetContent className='flex flex-col items-start p-5'>
            <SheetTitle>Menu</SheetTitle>

            <Button asChild variant='ghost'>
              <Link href='/cart'>
                <ShoppingCart /> 購物車
              </Link>
            </Button>
            <Button
              asChild
              className='bg-primary-600 text-white hover:bg-primary-700'
            >
              <Link href='/sign-in'>登入／註冊</Link>
            </Button>
          </SheetContent>
          <SheetDescription></SheetDescription>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
