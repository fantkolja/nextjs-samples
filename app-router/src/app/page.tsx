import Image from "next/image";
import { Header } from '@/ui/components/common/Header/Header';
import { Menu } from '@/ui/components/common/Menu/Menu';
import { Logo } from '@/ui/components/common/Logo/Logo';
import { clsx } from 'clsx';
import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header/>
      <Logo/>
      <Menu/>
    </main>
  );
}
