import { sql } from '@vercel/postgres';
import { Customer, CustomerPayload } from '@/types/customer';
import bcrypt from 'bcryptjs';
import { User, UserDBEntry, UserPayload } from '@/types/user';

export const getCustomers = async () => {
  console.log('[DB] Query Customers');
  const data = await sql<Customer>`SELECT * FROM customers`;
  console.log('[DB] Received Customers', data.rows);
  return data.rows;
};

export const getCustomersByEmail = async (email: string) => {
  console.log('[DB] Query Customers By Email');
  const data = await sql<Customer>`SELECT * FROM customers WHERE email = ${email}`;
  console.log('[DB] Received Customers By Email', data.rows.length);
  return data.rows;
};

export const createCustomer = async (customer: Omit<Customer, 'id'>) => {
  console.log('[DB] Creating Customer')
  const result = await sql`
    INSERT INTO customers (name, email, image_url)
    VALUES (${customer.name}, ${customer.email}, ${customer.image_url})
    ON CONFLICT (id) DO NOTHING;
  `;
  console.log('[DB] Created Customer')
  return result;
}

export const deleteCustomer = async (id: Customer['id']) => {
  console.log('[DB] Deleting Customer', id)
  const result = await sql`
    DELETE from customers WHERE id = ${id};
  `;
  console.log('[DB] Deleted Customer', id)
  return result;
}

export const updateCustomer = async (id: Customer['id'], updatedFields: Partial<CustomerPayload>) => {
  console.log('[DB] Updating Customer', id)

  const result = await sql`
    UPDATE customers
    SET image_url = ${updatedFields.image_url}
    WHERE id = ${id};
  `;
  console.log('[DB] Updated Customer', id)
  return result;
}

export const createUser = async (user: UserPayload) => {
  const hashedPassword = user.password ? await bcrypt.hash(user.password, parseInt(process.env.PASSWORD_HASH_SALT as string)) : null;
  return sql`
    INSERT INTO users (name, email, password)
    VALUES (${user.name}, ${user.email}, ${hashedPassword});
  `;
}

export const getUserByEmail = async (email: string): Promise<UserDBEntry | null> => {
  console.log('[DB] Query User', email);
  const data = await sql<UserDBEntry>`
    SELECT *
    FROM users
    WHERE email = ${email};
  `;
  console.log('[DB] Received User', data.rows);
  return data.rows[0] || null;
};
