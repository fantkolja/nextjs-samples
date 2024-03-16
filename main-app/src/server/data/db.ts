import { createPool, sql } from '@vercel/postgres';
// const pool = createPool({
//   connectionString: process.env.POSTGRES_URL,
// });
// await pool.connect();

export const getCustomers = async () => {
  // const data = await pool.sql<any>`SELECT * FROM customers`;
  const data = await sql<any>`SELECT * FROM customers`;

  return data.rows;
};

