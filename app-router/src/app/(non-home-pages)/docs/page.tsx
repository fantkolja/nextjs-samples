import { fetchAllPosts } from '@/server/actions/fetcher';
import { DocsInfo } from '@/ui/components/docs/DocsInfo/DocsInfo';
import { RecentDoc } from '@/ui/components/docs/RecentDoc/RecentDoc';

export default function Docs() {
  // @FIXME: why no page loading screen?
  fetchAllPosts().then((docs) => console.log(`Fetched ${docs.length} docs`));
  return (
    <div>
      <DocsInfo docs={[]} />
      <h3 className="mt-8 mb-4">Recent docs</h3>
      <div className="flex justify-between gap-6">
        {/* @FIXME: parallel loading? */}
        <RecentDoc id={1} />
        <RecentDoc id={2} />
        <RecentDoc id={3} />
      </div>
    </div>
  );
}
