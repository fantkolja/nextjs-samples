import { Post } from '@/types/posts';
import { fetchAllCustomers } from '@/server/data/fetcher';

export interface DocsInfoProps {
  docs: Post[];
}

export const DocsInfo: React.FC<DocsInfoProps> = async ({ docs }) => {
  await fetchAllCustomers();

  return (
    <div>
      <h2 className="text-center text-4xl">
        Docs
      </h2>
      <p className="text-center">
        total: {docs.length}
      </p>
    </div>
  );
};
