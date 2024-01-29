import { Header } from '@/ui/components/common/Header/Header';
import { Menu } from '@/ui/components/common/Menu/Menu';
import { fetchPosts } from '@/server/actions/fetcher';

export default function Docs() {
  // @FIXME: why no page loading screen?
  fetchPosts().then(console.log);
  return (
    <h2 className="text-4xl">Docs</h2>
  );
}
