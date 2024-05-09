import { createCustomer, getCustomers, getCustomersByEmail } from '@/server/data/db';
import { CustomerPayload } from '@/types/customer';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get('email');
  const customers = email ? await getCustomersByEmail(email) : await getCustomers();

  return Response.json({ customers });
}

export async function POST(request: NextRequest) {
  const customerData: CustomerPayload = await request.json();
  const result = await createCustomer(customerData);

  return Response.json({ count: result.rowCount });
}
