import { getCustomers } from '@/server/data/db';
import React from 'react';

export default async function Deploy() {
  const customers = await getCustomers();
  return (
    <div>
      <h2 className="text-4xl">Deploy</h2>
      <p>You have {customers.length} customers</p>
    </div>

  );
}
