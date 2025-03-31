import { fetchAllPosts } from '@/server/data/fetcher';

export async function GET() {
  const articles = await fetchAllPosts();

  return Response.json({
    message: process.env.ENV_WELCOME,
    articles,
  });
}
