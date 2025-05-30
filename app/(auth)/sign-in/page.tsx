import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { APP_NAME } from '@/lib/constants';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CredentialsSignInForm from './credentials-signin-form';

import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: '登入',
};

export default async function SignInPage(props: {
  searchParams: Promise<{ callbackUrl: string }>;
}) {
  const { callbackUrl } = await props.searchParams;
  const session = await auth();

  if (session) {
    return redirect(callbackUrl || '/');
  }

  return (
    <div className='wrapper py-6 xl:py-12 px-4 '>
      <div className='flex mx-auto'>
        <div className='relative rounded-xl rounded-r-none border shadow-sm border-r-0 overflow-hidden hidden lg:block'>
          <Image
            src='/signin_banner.png'
            alt='sign-in'
            width={1024}
            height={1024}
            className='object-container'
          />
        </div>

        <Card className='min-w-[350px] mx-auto lg:rounded-l-none lg:border-l-0'>
          <CardHeader>
            <Link href='/' className='flex items-center justify-center'>
              <Image
                priority={true}
                src='/icons/logo.svg'
                width={100}
                height={100}
                alt={`${APP_NAME} logo`}
              />
            </Link>
            <CardTitle className='text-center'>登入</CardTitle>
            <CardDescription className='text-center'>
              歡迎回來碳吉學院
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-4 w-full'>
            <CredentialsSignInForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
