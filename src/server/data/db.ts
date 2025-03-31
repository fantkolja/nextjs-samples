import { sql } from '@vercel/postgres';
import { Customer } from '@/types/customer';

export const getCustomers = async () => {
  console.log('[DB] Query Customers');
  // const data = await sql<Customer>`SELECT * FROM customers`;
  const data = { rows: [] };
  console.log('[DB] Received Customers', data.rows.length);
  return data.rows;
};

