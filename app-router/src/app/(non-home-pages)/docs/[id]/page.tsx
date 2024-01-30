import { fetchPost } from '@/server/actions/fetcher';
import { PageProps } from '@/types/page';

interface DocDetailsPageParams {
  id: string;
}

export default async function DocDetailsPage({ params: { id } }: PageProps<DocDetailsPageParams>) {
  const doc = await fetchPost(Number(id));

  return (
    <div>
      <h2 className="text-xl text-blue-400">{doc.title}</h2>
      <p>{doc.body}</p>
    </div>
  );
}
