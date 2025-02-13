import { PageProps } from '@/types/page';

interface TemplatesPageParams {
  categories: string[];
}

export default async function Templates(props: PageProps<TemplatesPageParams>) {
  const params = await props.params;

  const {
    categories
  } = params;

  return (
    <div>
      <h2 className="text-4xl">Templates Categories</h2>
      <p className="text-center">{categories.join(', ')}</p>
    </div>
  );
}
