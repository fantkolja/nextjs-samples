import { User } from '@/types/user';
import { createUser, getUserByEmail } from '@/server/data/db';
import bcrypt from 'bcryptjs';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import NextAuth, { Account, NextAuthConfig, Profile } from 'next-auth';

const isOIDC = (account: Account | null): boolean => {
  return account?.provider === 'google' || account?.provider === 'github';
}

const createOIDCUser = async (profile: Profile) => {
  if (profile.email) {
    const user = await getUserByEmail(profile.email);
    if (!user) {
      await createUser({
        name: profile.name || profile.email.split('@')[0] as string,
        email: profile.email,
        password: null,
      });
    }
  }
}

const isAccountVerified = (account: Account | null, profile?: Profile): boolean => {
  return account?.provider !== 'google' || !!profile?.email_verified;
}

export const isPrivateResource = (pathname: string) => {
  return !pathname.startsWith('/sign-in') && !pathname.startsWith('/sign-up');
}

export const authorizeCredentials = async (email: string, password: string): Promise<User | null> => {
  const user = await getUserByEmail(email);
  const doesPasswordMatch: boolean = !!user?.password && await bcrypt.compare(password, user.password);
  return doesPasswordMatch ? user : null;
}

export const nextAuth: NextAuthConfig = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'john.doe@ztu.edu.ua', required: true },
        password: { label: 'Password', type: 'password', required: true },
      },
      async authorize(credentials, req) {
        return authorizeCredentials(credentials.email as string, credentials.password as string);
      }
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      let isSignInAllowed = true;
      if (isOIDC(account)) {
        if (!isAccountVerified(account, profile) || !profile?.email) {
          isSignInAllowed = false;
        } else {
          await createOIDCUser(profile);
        }
      }
      return isSignInAllowed;
    },
  },
  cookies: {
    pkceCodeVerifier: {
      name: "next-auth.pkce.code_verifier",
      options: {
        httpOnly: true,
        sameSite: "none",
        path: "/",
        secure: true,
      },
    },
  },
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth(nextAuth);
