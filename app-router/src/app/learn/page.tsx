import { Header } from '@/ui/components/common/Header/Header';
import { Menu } from '@/ui/components/common/Menu/Menu';

export default function Learn() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <h2 className="text-4xl">Learn</h2>
      <Menu />
    </main>
  );
}
