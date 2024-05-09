import { Logo } from '@/ui/components/common/Logo/Logo';
import React from 'react';
import LoginForm from '@/ui/components/auth/LoginForm';

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col items-center space-y-2.5 p-4 md:-mt-32">
        <Logo className="mb-8" />
        <LoginForm />
      </div>
    </main>
  );
}
