import { Header } from '@/ui/components/common/Header/Header';
import { Menu } from '@/ui/components/common/Menu/Menu';

export default function NonHomePageLayout({ children }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Menu />
      {children}
      <Header />
    </main>
  );
}
