import Link from 'next/link';
import Icon, { Icons } from '@/app/components/ui/Icon';

export default function Home() {
  return (
      <>
        <nav>
            <Link href="/signin">Sign In</Link>
            <Link href="/signup">Sign Up</Link>

            <Icon id={Icons.CHECK} />
            <Icon id={Icons.DOUBLE_ANGLE_LEFT} size='3rem' />
        </nav>
        <h1>Home page</h1>
        <p>Welcome to the Event Tracker app.</p>
      </>
  );
}
