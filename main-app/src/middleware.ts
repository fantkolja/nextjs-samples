import { NextResponse, NextRequest } from 'next/server'
import { getSession } from '@/app/auth-utils';

export async function middleware(request: NextRequest) {
  const session = await getSession();
  if (!session) {
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/', '/deploy/:path*', '/docs/:path*', '/learn/:path*', '/templates/:path*', '/api/:path*',
  ],
};
