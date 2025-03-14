import { createCustomer, getCustomers, getCustomersByEmail } from '@/server/data/db';
import { CustomerPayload } from '@/types/customer';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  // @TODO: add validation stage
  // @TODO: add pagination
  const email = new URL(request.url).searchParams.get('email');
  const customers = email ? await getCustomersByEmail(email) : await getCustomers();

  return Response.json({ customers });
}

export async function POST(request: NextRequest) {
  // @TODO: add validation stage
  // @TODO: add pagination
  const customerData: CustomerPayload = await request.json();
  const result = await createCustomer(customerData);

  return Response.json({ count: result.rowCount });
}
