import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

// Беремо посилання на БД з файлу .env.local
const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql);