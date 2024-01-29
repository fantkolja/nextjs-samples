import { Post } from '@/types/posts';
import { fetchPost } from '@/server/actions/fetcher';

export interface RecentDocProps {
  id: number;
}

export const RecentDoc: React.FC<RecentDocProps> = ({ id }) => {
  fetchPost(id).then(console.log);
  return (
    <div>
      <h2 className="text-4xl">
        {id}
      </h2>
      <p className="text-center">
        total:
      </p>
    </div>
  );
};
