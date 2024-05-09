import Link from 'next/link';

export const ArticleTabs = () => {
  return (
    <menu className="border border-blue-800 bg-blue-200 rounded text-blue-800 flex justify-between items-center overflow-hidden">
      <Link className="border-r border-blue-800 p-4 transition hover:bg-blue-300" href="/learn">
        Default
      </Link>
      <Link className="p-4 transition hover:bg-blue-300" href="/learn/settings">
        Settings
      </Link>
    </menu>
  );
}
