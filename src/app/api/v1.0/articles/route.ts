import { fetchAllPosts } from '@/server/data/fetcher';
import {getArticles} from "@/server/db/article/getArticles";

export async function GET() {
  const articles = process.env.DB_DATABASE_URL ? await getArticles() : await fetchAllPosts();

  return Response.json({
    server_welcome: process.env.ENV_WELCOME,
    public_welcome: process.env.NEXT_PUBLIC_WELCOME,
    articles: articles,
  });
}
