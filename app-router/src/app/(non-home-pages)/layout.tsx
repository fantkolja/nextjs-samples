import { Header } from '@/ui/components/common/Header/Header';
import { Menu } from '@/ui/components/common/Menu/Menu';
import { LayoutProps } from '@/types/page';
import { ReactNode } from 'react';

interface LayoutSlots {
  article: ReactNode;
}

export default function NonHomePageLayout({ children, article }: LayoutProps & LayoutSlots) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Menu />
      {children}
      {article}
      <Header />
    </main>
  );
}
