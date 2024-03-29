import { Header } from '@/ui/components/common/Header/Header';
import { Menu } from '@/ui/components/common/Menu/Menu';
import { Logo } from '@/ui/components/common/Logo/Logo';
import React from 'react';
import { getCustomers } from '@/server/data/db';

export default async function Home() {
  const customers = await getCustomers();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header/>
      <Logo/>
      <p>{process.env.NEXT_PUBLIC_ENV_WELCOME}</p>
      <p>You have {customers.length} customers</p>
      <Menu/>
    </main>
  );
}
