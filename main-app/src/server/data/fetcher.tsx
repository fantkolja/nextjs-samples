import { Post } from '@/types/posts';

export const sleep = async (timeout: number) => {
  return new Promise(res => setTimeout(res, timeout));
}

export const fetchAllPosts = async (): Promise<Post[]> => {
  console.log('START: fetching all posts');
  // await sleep(2000);
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      console.log('FINISH: fetching all posts');
      return response.json();
    });
}

export const fetchPost = async (id: number): Promise<Post> => {
  console.log(`START: fetching post ${id}`);
  // await sleep(4000 * id);
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => {
      console.log(`FINISH: fetching post ${id}`);
      return response.json();
    });
}
