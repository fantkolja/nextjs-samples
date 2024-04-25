import { fetchAllPosts } from '@/server/data/fetcher';
import { customers } from '../../mocks/customers';

// global.fetch = jest.fn().mockResolvedValue({});
// @ts-ignore
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => customers,
  });
});

describe('fetcher', () => {
  it('fetchAllPosts calls a correct URL', async () => {
    await fetchAllPosts();
    expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts');
  });

  it('fetchAllPosts returns JSON response of the fetch request', async () => {
    const result = await fetchAllPosts();
    expect(result.length).toBe(customers.length);
  });
})
