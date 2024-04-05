import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { sql } from '@vercel/postgres';
import bcrypt from 'bcrypt';

const sessionCookieName = 'session';
const jwtSecret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1 min from now")
    .sign(jwtSecret);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, jwtSecret, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function login(email: string, hashedPassword: string) {
  const user = sql`SELECT (id, email, name) FROM users WHERE email = ${email} AND password = ${hashedPassword}`;

  const expires = new Date(Date.now() + 10 * 1000);
  const session = await encrypt({ user, expires });

  cookies().set(sessionCookieName, session, { expires, httpOnly: true });
}

export async function logout() {
  cookies().set(sessionCookieName, "", { expires: new Date(0) });
}

export async function getSession() {
  const session = cookies().get(sessionCookieName)?.value;
  if (!session) return null;
  return await decrypt(session);
}

export async function refreshSession(request: NextRequest) {
  const session = request.cookies.get(sessionCookieName)?.value;
  if (!session) return;

  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 10 * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name: sessionCookieName,
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}
