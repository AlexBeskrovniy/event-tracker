'use client';

import { authClient } from '@/lib/auth/client';

export function GoogleSignInButton() {
  const handleSignIn = async () => {
    await authClient.signIn.social({
      provider: 'google',
      callbackURL: '/app',
      newUserCallbackURL: '/app'
    });
  };

  return <button onClick={handleSignIn}>Sign in with Google</button>;
}
