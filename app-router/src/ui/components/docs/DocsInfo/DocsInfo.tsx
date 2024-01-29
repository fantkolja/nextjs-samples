import { Post } from '@/types/posts';

export interface DocsInfoProps {
  docs: Post[];
}

export const DocsInfo: React.FC<DocsInfoProps> = ({ docs }) => {
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
