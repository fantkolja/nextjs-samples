import { NextResponse, NextRequest } from 'next/server'
import { auth, isPrivateResource } from '@/server/auth-utils';

export async function middleware(request: NextRequest) {
  const session = await auth();
  const { pathname } = request.nextUrl;

  console.log('[SESSION_DATA]: ', session);

  if (!session && isPrivateResource(pathname)) {
    return NextResponse.redirect(new URL('/sign-in', request.url));

  } else if (session && pathname.startsWith('/sign-in')) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api/auth|_next/static|_next/image|.*\\..*).*)',
  ],
};
