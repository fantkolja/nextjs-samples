import { Header } from '@/ui/components/common/Header/Header';
import { Menu } from '@/ui/components/common/Menu/Menu';
import { Logo } from '@/ui/components/common/Logo/Logo';
import React from 'react';
import { getArticles } from '@/server/db/article/getArticles';

export default async function Home() {
  const articles = await getArticles();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header/>
      <Logo/>
      <p>{process.env.ENV_WELCOME}</p>
      <p>You have {articles.length} articles</p>
      <Menu/>
    </main>
  );
}
