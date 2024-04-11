import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { User } from '@/types/user';
import { createUser, getUserByEmail } from '@/server/data/db';
import bcrypt from 'bcryptjs';

// const SESSION_COOKIE_NAME = 'session';
// const SESSION_DURATION_IN_SECONDS = 10;
// const SESSION_DURATION = SESSION_DURATION_IN_SECONDS * 1000;
// const jwtSecret = new TextEncoder().encode(process.env.AUTH_SECRET);
//
// export async function encrypt(payload: { user: User, expires: Date }) {
//   return await new SignJWT(payload)
//     .setProtectedHeader({ alg: 'HS256' })
//     .setIssuedAt()
//     .setExpirationTime(`${SESSION_DURATION_IN_SECONDS} sec from now`)
//     .sign(jwtSecret);
// }
//
// export async function decrypt(input: string): Promise<any> {
//   const { payload } = await jwtVerify(input, jwtSecret, {
//     algorithms: ["HS256"],
//   });
//   return payload;
// }
//
// export async function login(email: string, password: string) {
//   let isLoggedIn = false;
//
//   const user = await getUserByEmail(email);
//
//   if (user) {
//     let doesPasswordMatch = await bcrypt.compare(password, user.password);
//
//     if (doesPasswordMatch) {
//       const expires = new Date(Date.now() + SESSION_DURATION);
//       const session = await encrypt({ user: user as unknown as User, expires });
//
//       cookies().set(SESSION_COOKIE_NAME, session, { expires, httpOnly: true });
//       isLoggedIn = true;
//     }
//   }
//   return isLoggedIn;
// }
//
// export async function logout() {
//   cookies().set(SESSION_COOKIE_NAME, "", { expires: new Date(0) });
// }
//
// export async function getSession() {
//   const session = cookies().get(SESSION_COOKIE_NAME)?.value;
//   if (!session) return null;
//   return await decrypt(session);
// }
//
// export async function refreshSession(request: NextRequest) {
//   const session = request.cookies.get(SESSION_COOKIE_NAME)?.value;
//   if (!session) return;
//
//   const parsed = await decrypt(session);
//   parsed.expires = new Date(Date.now() + SESSION_DURATION);
//   const res = NextResponse.next();
//   res.cookies.set({
//     name: SESSION_COOKIE_NAME,
//     value: await encrypt(parsed),
//     httpOnly: true,
//     expires: parsed.expires,
//   });
//   return res;
// }

import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import NextAuth, { Account, NextAuthConfig, Profile } from 'next-auth';

const isAccountVerified = (account: Account | null, profile?: Profile): boolean => {
  return account?.provider !== 'google' || !!profile?.email_verified;
}

export const isPrivateResource = (pathname: string) => {
  return !pathname.startsWith('/sign-in') && !pathname.startsWith('/sign-up');
}

export const nextAuth: NextAuthConfig = {
  session: {
    strategy: 'jwt',
  },
  providers: [
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
      if (!isAccountVerified(account, profile) || !profile?.email) {
        return false;
      }
      // create a user if needed
      const user = await getUserByEmail(profile.email);
      if (!user) {
        await createUser({
          name: profile.name || profile.email.split('@')[0] as string,
          email: profile.email,
          password: null,
        });
      }
      return true;
    },
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth(nextAuth);
