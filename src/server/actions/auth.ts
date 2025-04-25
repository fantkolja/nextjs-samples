'use server';

import { signIn } from '@/server/auth-utils';

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
