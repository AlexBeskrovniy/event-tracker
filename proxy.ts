import { auth } from '@/lib/auth/server';

export default auth.middleware({
  // Redirects unauthenticated users to sign-in page
  loginUrl: '/auth/signin',
});

export const config = {
  matcher: [
    // Protected routes requiring authentication
    '/workspace/:path/:foo*',
    // Exclude API routes, static files, image optimizations, and .png files
    // '/((?!api|_next/static|_next/image|.*\\.png$).*)',
  ],
};
