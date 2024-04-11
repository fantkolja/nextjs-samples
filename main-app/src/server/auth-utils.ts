import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { User } from '@/types/user';
import { getUserByEmail } from '@/server/data/db';
import bcrypt from 'bcryptjs';

const SESSION_COOKIE_NAME = 'session';
const SESSION_DURATION_IN_SECONDS = 10;
const SESSION_DURATION = SESSION_DURATION_IN_SECONDS * 1000;
const jwtSecret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function encrypt(payload: { user: User, expires: Date }) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_DURATION_IN_SECONDS} sec from now`)
    .sign(jwtSecret);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, jwtSecret, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function login(email: string, password: string) {
  let isLoggedIn = false;

  const user = await getUserByEmail(email);

  if (user) {
    let doesPasswordMatch = await bcrypt.compare(password, user.password);

    if (doesPasswordMatch) {
      const expires = new Date(Date.now() + SESSION_DURATION);
      const session = await encrypt({ user: user as unknown as User, expires });

      cookies().set(SESSION_COOKIE_NAME, session, { expires, httpOnly: true });
      isLoggedIn = true;
    }
  }
  return isLoggedIn;
}

export async function logout() {
  cookies().set(SESSION_COOKIE_NAME, "", { expires: new Date(0) });
}

export async function getSession() {
  const session = cookies().get(SESSION_COOKIE_NAME)?.value;
  if (!session) return null;
  return await decrypt(session);
}

export async function refreshSession(request: NextRequest) {
  const session = request.cookies.get(SESSION_COOKIE_NAME)?.value;
  if (!session) return;

  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + SESSION_DURATION);
  const res = NextResponse.next();
  res.cookies.set({
    name: SESSION_COOKIE_NAME,
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}
