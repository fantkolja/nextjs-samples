import { sql } from '@vercel/postgres';
import { Customer, CustomerPayload } from '@/types/customer';

export const getCustomers = async () => {
  console.log('[DB] Query Customers');
  const data = await sql<Customer>`SELECT id, name, email, image_url FROM customers`;
  console.log('[DB] Received Customers', data.rows.length);
  return data.rows;
};

export const getCustomersByEmail = async (email: string) => {
  console.log('[DB] Query Customers By Email');
  const data = await sql<Customer>`SELECT id, name, email, image_url FROM customers WHERE email = ${email}`;
  console.log('[DB] Received Customers By Email', data.rows.length);
  return data.rows;
};

export const createCustomer = async (customer: Omit<Customer, 'id'>) => {
  console.log('[DB] Creating Customer')
  const result = await sql`
    INSERT INTO customers (name, email, image_url)
    VALUES (${customer.name}, ${customer.email}, ${customer.image_url});
  `;
  console.log('[DB] Created Customer')
  return result;
}

export const deleteCustomer = async (id: Customer['id']) => {
  console.log('[DB] Deleting Customer', id)
  const result = await sql`
    DELETE FROM customers WHERE id = ${id};
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
