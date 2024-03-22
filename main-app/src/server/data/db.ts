import { sql } from '@vercel/postgres';

export const getCustomers = async () => {
  console.log('[DB] Query Customers');
  // const data = await pool.sql<any>`SELECT * FROM customers`;
  const data = await sql<any>`SELECT * FROM customers`;

  return data.rows;
};

