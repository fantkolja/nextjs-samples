import { Header } from '@/ui/components/common/Header/Header';
import { Menu } from '@/ui/components/common/Menu/Menu';
import { fetchPosts } from '@/server/actions/fetcher';

export default function Docs() {
  // @FIXME: why no page loading screen?
  fetchPosts().then(console.log);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <h2 className="text-4xl">Docs</h2>
      <Menu />
    </main>
  );
}
