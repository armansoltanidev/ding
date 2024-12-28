import { Suspense, type ReactNode } from 'react';
import { ModeToggle } from '@repo/design-system/components/mode-toggle';
import { env } from '@repo/env';
import { CommandIcon } from 'lucide-react';
import Link from 'next/link';


type AuthLayoutProps = {
  readonly children: ReactNode;
};



const AuthLayout = ({ children }: AuthLayoutProps) => (
  <div className="container relative grid h-dvh flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
    
    <div className="lg:p-8">
      <div className="mx-auto flex w-full max-w-[400px] flex-col justify-center space-y-6">
        {children}
        <p className="px-8 text-center text-muted-foreground text-sm">
          ورود شما به سایت به معنای پذیرش{' '}
          <Link
            href={new URL('/legal/terms', env.NEXT_PUBLIC_WEB_URL).toString()}
            className="underline underline-offset-4 hover:text-primary"
          >
            شرایط دینگ
          </Link>{' '}
          ,{' '}
          <Link
            href={new URL('/legal/privacy', env.NEXT_PUBLIC_WEB_URL).toString()}
            className="underline underline-offset-4 hover:text-primary"
          >
            و قوانین حریم خصوصی
          </Link>
          {' '}است.
        </p>
      </div>
    </div>
    <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
      <div className="absolute inset-0 bg-zinc-900" />
      <div className="absolute top-4 left-4">
        <ModeToggle />
      </div>
      <div className="relative z-20 flex items-center font-medium text-lg">
        <CommandIcon className="mr-2 h-6 w-6" />
        دینــگ
      </div>
      <div className="relative z-20 mt-auto">
        <blockquote className="space-y-2">
          <p className="text-lg text-right">
            &ldquo;
            همیشه خرید شارژ بین الملل برای ایرانیان  کار سختی بوده،تحریم ها و عدم دسترسی به کارت های اعتباری بین المللی همیشه مشکلی بزرگ برای ما بوده،دینگ اومده کارتون رو راحت کنه، 
            پس زودتر ثبت نام کن
           &ldquo;
          </p>
          <footer className="text-sm text-left">آرمان سلطانی | مدیر و موئسس دینگ</footer>
        </blockquote>
      </div>
    </div>
  </div>
);

export default AuthLayout;
