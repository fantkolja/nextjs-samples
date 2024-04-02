import { sql } from '@vercel/postgres';
import { Customer } from '@/types/customer';

export const getCustomers = async () => {
  console.log('[DB] Query Customers');
  const data = await sql<Customer>`SELECT id, name, email, image_url FROM customers`;
  console.log('[DB] Received Customers', data.rows.length);
  return data.rows;
};
