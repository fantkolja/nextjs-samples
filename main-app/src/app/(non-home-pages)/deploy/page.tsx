import { getCustomers } from '@/server/data/db';
import React from 'react';

export const dynamic = 'force-dynamic';

export default async function Deploy() {
  const customers = await getCustomers();
  return (
    <div className="flex flex-col items-center gap-2">
      <p>{process.env.ENV_SERVER_WELCOME}</p>
      <h2 className="text-4xl">Deploy</h2>
      <p>You have {customers.length} customers</p>
    </div>

  );
}
