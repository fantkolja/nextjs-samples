import { NextRequest, NextResponse } from "next/server";

export function proxyLogic(request: NextRequest) {
  const url = request.nextUrl.clone();
  url.pathname = '/api/v1.0/articles';

  return NextResponse.rewrite(url);
}

export const proxyConfig = {
  matcher: '/api/articles',
};