import { createPool } from '@vercel/postgres';

export const getCustomers = async () => {
  const pool = createPool({
    connectionString: process.env.POSTGRES_URL,
  });
  await pool.connect();

  const data = await pool.sql<any>`SELECT * FROM customers`;

  return data.rows;
};

