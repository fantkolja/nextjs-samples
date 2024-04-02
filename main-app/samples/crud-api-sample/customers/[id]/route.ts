import { createCustomer, deleteCustomer, getCustomers, updateCustomer } from '@/server/data/db';
import { CustomerPayload } from '@/types/customer';
import { NextRequest } from 'next/server';

export interface PageParams {
  id: string;
}

export async function DELETE(_req: NextRequest, { params }: { params: PageParams }) {
  // @TODO: add validation stage
  const result = await deleteCustomer(params.id);

  return Response.json({ count: result.rowCount });
}

export async function PATCH(request: NextRequest, { params }: { params: PageParams }) {
  // @TODO: add validation stage
  const updatedFields = await request.json();
  const result = await updateCustomer(params.id, updatedFields as Partial<CustomerPayload>);

  return Response.json({ count: result.rowCount });
}
