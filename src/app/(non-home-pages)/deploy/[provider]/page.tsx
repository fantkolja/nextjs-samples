import { PageProps } from '@/types/page';

interface DocDetailsPageParams {
  provider: string;
}

export default async function DeploymentProviderPage(props: PageProps<DocDetailsPageParams>) {
  const params = await props.params;

  const {
    provider
  } = params;

  return (
    <div>
      <h2 className="text-xl text-blue-400">{provider}</h2>
      <p>deployment instructions</p>
    </div>
  );
}
