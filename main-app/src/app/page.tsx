import { Header } from '@/ui/components/common/Header/Header';
import { Menu } from '@/ui/components/common/Menu/Menu';
import { Logo } from '@/ui/components/common/Logo/Logo';
import React from 'react';
import { getCustomers } from '@/server/data/db';

export default async function Home() {
  const customers = await getCustomers();
  // console.log(customers);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header/>
      <Logo/>

      <Menu/>
    </main>
  );
}
