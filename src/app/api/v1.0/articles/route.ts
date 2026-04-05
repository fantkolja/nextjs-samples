import { fetchAllPosts } from '@/server/data/fetcher';

export async function GET() {
  const articles = await fetchAllPosts();

  return Response.json({
    server_welcome: process.env.ENV_WELCOME,
    public_welcome: process.env.NEXT_PUBLIC_WELCOME,
    articles_count: articles.length,
  });
}
