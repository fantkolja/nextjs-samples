import { Post } from '@/types/posts';
import { fetchPost } from '@/server/actions/fetcher';

export interface RecentDocProps {
  id: number;
}

export const RecentDoc: React.FC<RecentDocProps> = ({ id }) => {
  fetchPost(id);
  return (
    <div className="max-w-48">
      <h2 className="text-xl mb-2">
        doc.title
      </h2>
      <p className="">
        doc.body
      </p>
    </div>
  );
};
