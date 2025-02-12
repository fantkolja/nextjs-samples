import { Header } from '@/ui/components/common/Header/Header';
import { Menu } from '@/ui/components/common/Menu/Menu';
import { LayoutPageProps } from '@/types/page';

export default function NonHomePageLayout({ children }: LayoutPageProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Menu />
      {children}
      <Header />
    </main>
  );
}
