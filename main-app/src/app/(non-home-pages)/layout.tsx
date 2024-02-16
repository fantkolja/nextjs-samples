import { Header } from '@/ui/components/common/Header/Header';
import { Menu } from '@/ui/components/common/Menu/Menu';
import { LayoutProps } from '@/types/page';

export default function NonHomePageLayout({ children }: LayoutProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Menu />
      {children}
      <Header />
    </main>
  );
}
