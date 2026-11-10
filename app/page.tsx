import Link from 'next/link';

export default function Home() {
  return (
      <>
        <nav>
            <Link href="/signin">Sign In</Link>
            <Link href="/signup">Sign Up</Link>
        </nav>
        <h1>Home page</h1>
        <p>Welcome to the Event Tracker app.</p>
      </>
  );
}
