'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { signInDefaultValues } from '@/lib/constants';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { signInWithCredentials } from '@/lib/actions/user.actions';
import { useSearchParams } from 'next/navigation';

export default function CredentialsSignInForm() {
  const [data, action] = useActionState(signInWithCredentials, {
    success: false,
    message: '',
  });
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';
  const SignInButton = () => {
    const { pending } = useFormStatus();
    return (
      <Button
        disabled={pending}
        className='bg-primary-600 text-white hover:bg-primary-700 w-full'
        variant='default'
      >
        {pending ? '登入中...' : '登入'}
      </Button>
    );
  };
  return (
    <form action={action}>
      <input type='hidden' name='callbackUrl' value={callbackUrl} />
      <div className='space-y-3'>
        <div className='space-y-3'>
          <Label htmlFor='email'>Email</Label>
          <Input
            id='email'
            name='email'
            required
            type='email'
            defaultValue={signInDefaultValues.email}
            autoComplete='email'
          />
        </div>
        <div className='space-y-3'>
          <Label htmlFor='password'>密碼</Label>
          <Input
            id='password'
            name='password'
            required
            type='password'
            defaultValue={signInDefaultValues.password}
            autoComplete='current-password'
          />
        </div>
        <div>
          <SignInButton />
        </div>
        {data && !data.success && (
          <div className='text-center text-destructive'>{data.message}</div>
        )}
        <div className='text-sm text-center text-muted-foreground'>
          還沒有帳號?{' '}
          <Link target='_self' className='link' href='/sign-up'>
            註冊
          </Link>
        </div>
      </div>
    </form>
  );
}
