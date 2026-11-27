import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth/server';
import Header from '../components/Header';

export default async function Home() {
    const { data: session } = await auth.getSession();

    if (session) {
        redirect('/app/personal')
    };

    return (
        <>
            <Header user={null} />
            <h1>Home page</h1>
            <p>Welcome to the Event Tracker app.</p>
        </>
    );
}
