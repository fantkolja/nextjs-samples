import { Post } from '@/types/posts';
import { Customer } from '@/types/customer';

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

export const fetchAllCustomers = async (): Promise<Customer[]> => {
  console.log('START: fetching all customers');
  return fetch(`${process.env.NEXTAUTH_URL}/api/1.0.0/customers`)
    .then(response => {
      console.log('FINISH: fetching all customers');
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
