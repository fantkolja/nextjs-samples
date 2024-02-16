import { PageProps } from '@/types/page';

interface DocDetailsPageParams {
  provider: string;
}

export default async function DeploymentProviderPage({ params: { provider } }: PageProps<DocDetailsPageParams>) {
  return (
    <div>
      <h2 className="text-xl text-blue-400">{provider}</h2>
      <p>deployment instructions</p>
    </div>
  );
}
