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
import UserButton from './user-button';

export default function Menu() {
  return (
    <div className='flex justify-end gap-3 items-center'>
      <Button asChild variant='ghost'>
        <Link href='/cart'>
          <ShoppingCart />
        </Link>
      </Button>
      <nav className='hidden md:flex'>
        <UserButton />
      </nav>
      <nav className='md:hidden'>
        <Sheet>
          <SheetTrigger className='align-middle'>
            <MenuIcon />
          </SheetTrigger>
          <SheetContent className='flex flex-col items-start p-5'>
            <SheetTitle>Menu</SheetTitle>
            <UserButton />
          </SheetContent>
          <SheetDescription></SheetDescription>
        </Sheet>
      </nav>
    </div>
  );
}
