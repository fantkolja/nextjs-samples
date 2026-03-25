import { NextRequest } from 'next/server';
import { proxyLogic, proxyConfig } from './proxy';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/api/articles') {
    return proxyLogic(request);
  }
}

export const config = proxyConfig;