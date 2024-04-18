import { fetchAllCustomers, fetchAllPosts } from '@/server/data/fetcher';
import { DocsInfo } from '@/ui/components/docs/DocsInfo/DocsInfo';
import { RecentDoc } from '@/ui/components/docs/RecentDoc/RecentDoc';
import { revalidatePath } from 'next/cache';

export default async function Docs() {

  await fetchAllCustomers();

  return (
    <div>
      <DocsInfo docs={[]} />
      <h3 className="mt-8 mb-4">Recent docs</h3>
      {/*<div className="flex justify-between gap-6">*/}
      {/*  /!* @FIXME: parallel loading? *!/*/}
      {/*  <RecentDoc id={1} />*/}
      {/*  <RecentDoc id={2} />*/}
      {/*  <RecentDoc id={3} />*/}
      {/*</div>*/}
    </div>
  );
}
