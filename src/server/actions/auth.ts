'use server';

import { signIn } from '@/server/auth-utils';
import { createUser } from '@/server/data/db';
import { redirect } from 'next/navigation';

export const onSignIn = async (formData: FormData) => {
  await signIn('credentials', {
    redirectTo: '/',
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  });
};

export const onGithubSignIn = async () => {
  await signIn('github');
}

export const onGoogleSignIn = async () => {
  await signIn('github');
}

export const onSignUp = async (formData: FormData) => {
  'use server'
  await createUser({
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  });
  redirect('/sign-in');
};
