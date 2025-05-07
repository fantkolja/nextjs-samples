import { customers } from '../../mocks/customers';
import { getCustomers } from '@/server/data/db';
import { sql } from '@vercel/postgres';

jest.mock('@vercel/postgres', () => {
  const sql = jest.fn(() => ({ rows: [] }));
  return {
    sql,
  };
});

describe('db', () => {
  it('getCustomers returns empty "rows" array from sql()', async () => {
    const result = await getCustomers();
    expect(result.length).toBe(0);
  });

  it('getCustomers returns correct number of elements from sql()', async () => {
    (sql as unknown as jest.Mock).mockReturnValue({ rows: [...customers] });
    const result = await getCustomers();
    expect(result.length).toBe(customers.length);
  });

  it('getCustomers calls sql adapter with a correct query', async () => {
    const result = await getCustomers();
    expect(sql).toHaveBeenCalledWith(expect.arrayContaining(["SELECT * FROM customers"]));
  });
})
