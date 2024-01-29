import { Post } from '@/types/posts';

export const sleep = async (timeout: number) => {
  return new Promise(res => setTimeout(res, timeout));
}

export const fetchPosts = async (): Promise<Post[]> => {
  await sleep(3000);
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json());
}
