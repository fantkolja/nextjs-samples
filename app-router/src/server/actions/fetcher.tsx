import { Post } from '@/types/posts';

export const fetchPosts = async (): Promise<Post[]> => {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json());
}
