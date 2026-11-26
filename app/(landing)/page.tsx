import { redirect } from 'next/navigation';
import Link from 'next/link';
import { auth } from '@/lib/auth/server';

export default async function Home() {
    const { data: session } = await auth.getSession();

    if (session) {
        redirect('/app/personal')
    };

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
