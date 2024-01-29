import { Header } from '@/ui/components/common/Header/Header';
import { Menu } from '@/ui/components/common/Menu/Menu';

export default function Docs() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => console.log(json))
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <h2 className="text-4xl">Docs</h2>
      <Menu />
    </main>
  );
}
