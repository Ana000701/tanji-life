'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { signUpDefaultValues } from '@/lib/constants';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { signUp } from '@/lib/actions/user.actions';

export default function SignUpForm() {
  const [data, action] = useActionState(signUp, {
    message: '',
    success: false,
  });

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  const SignUpButton = () => {
    const { pending } = useFormStatus();
    return (
      <Button
        disabled={pending}
        className='bg-primary-600 text-white hover:bg-primary-700 w-full'
        variant='default'
      >
        {pending ? '註冊中...' : '註冊'}
      </Button>
    );
  };

  return (
    <form action={action}>
      <input type='hidden' name='callbackUrl' value={callbackUrl} />
      <div className='space-y-3'>
        <div className='space-y-3'>
          <Label htmlFor='name'>會員名稱</Label>
          <Input
            id='name'
            name='name'
            type='text'
            defaultValue={signUpDefaultValues.name}
            autoComplete='name'
          />
        </div>
        <div className='space-y-3'>
          <Label htmlFor='email'>Email</Label>
          <Input
            id='email'
            name='email'
            type='email'
            defaultValue={signUpDefaultValues.email}
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
            defaultValue={signUpDefaultValues.password}
            autoComplete='current-password'
          />
        </div>
        <div className='space-y-3'>
          <Label htmlFor='confirmPassword'>再次輸入密碼</Label>
          <Input
            id='confirmPassword'
            name='confirmPassword'
            required
            type='password'
            defaultValue={signUpDefaultValues.confirmPassword}
            autoComplete='current-password'
          />
        </div>
        <div>
          <SignUpButton />
        </div>

        {!data.success && (
          <div className='text-center text-destructive'>{data.message}</div>
        )}

        <div className='text-sm text-center text-muted-foreground'>
          已經有帳號了?{' '}
          <Link
            target='_self'
            className='link'
            href={`/sign-in?callbackUrl=${callbackUrl}`}
          >
            登入
          </Link>
        </div>
      </div>
    </form>
  );
}
