import { fetchPost } from '@/server/data/fetcher';
import { PageProps } from '@/types/page';

interface DocDetailsPageParams {
  id: string;
}

export default async function DocDetailsPage(props: PageProps<DocDetailsPageParams>) {
  const params = await props.params;

  const {
    id
  } = params;

  const doc = await fetchPost(Number(id));

  return (
    <div>
      <h2 className="text-xl text-blue-400">{doc.title}</h2>
      <p>{doc.body}</p>
    </div>
  );
}
