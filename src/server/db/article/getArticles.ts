import { drizzle } from 'drizzle-orm/neon-http';
import { articlesTable } from '@/server/db/article/schema';

export const db = drizzle(process.env.DB_DATABASE_URL!);

export const getArticles = async () => await db.select().from(articlesTable);