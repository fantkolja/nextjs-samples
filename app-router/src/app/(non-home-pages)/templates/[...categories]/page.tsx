import { PageProps } from '@/types/page';

interface TemplatesPageParams {
  categories: string[];
}

export default function Templates({ params: { categories } }: PageProps<TemplatesPageParams>) {
  return (
    <div>
      <h2 className="text-4xl">Templates Categories</h2>
      <p className="text-center">{categories.join(', ')}</p>
    </div>
  );
}
