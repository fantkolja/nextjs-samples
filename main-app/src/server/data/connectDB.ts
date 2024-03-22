import { createPool, VercelPool } from '@vercel/postgres';

console.log('[DB] CREATING DB POOL');
export const pool: VercelPool = createPool({
  connectionString: process.env.POSTGRES_URL,
});

export const connectDB = async () => {

};
