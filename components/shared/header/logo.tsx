import { APP_NAME } from '@/lib/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export default function Logo({ className }: { className?: string }) {
  return (
    <>
      <Link href='/' className='flex items-center'>
        <Image
          src='/icons/logo.svg'
          alt={`${APP_NAME} logo`}
          height={40}
          width={40}
          priority={true}
        />
        <span className={cn('font-bold text-2xl', className)}>{APP_NAME}</span>
      </Link>
    </>
  );
}
