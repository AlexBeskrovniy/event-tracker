import Link from 'next/link';
import Icon, { Icons } from '@/app/components/ui/Icon';

export default function Home() {
  return (
      <>
        <nav>
            <Link href="/auth/signin">Sign In</Link>
            <Link href="/auth/signup">Sign Up</Link>
        </nav>
        <h1>Home page</h1>
        <p>Welcome to the Event Tracker app.</p>
      </>
  );
}
