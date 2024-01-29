import { Post } from '@/types/posts';

export const sleep = async (timeout: number) => {
  return new Promise(res => setTimeout(res, timeout));
}

export const fetchAllPosts = async (): Promise<Post[]> => {
  await sleep(3000);
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json());
}

export const fetchPost = async (id: number): Promise<Post> => {
  await sleep(4000 * id);
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json());
}
