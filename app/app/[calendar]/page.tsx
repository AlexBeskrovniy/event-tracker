import { auth } from '@/lib/auth/server';
import { Suspense } from 'react';
import Month from '@/app/components/Month';

export default async function Calendar() {
    const { data: session } = await auth.getSession();
   
    return (
        <Suspense fallback={<p>...Loading...</p>}>
            {session?.user ? (
                <>
                <p>{session.user.name}</p>
                <div>{session.user.email}</div>
                </>
            ) : (<p>Not logged in</p>)}
            <Month />
        </Suspense>
    );
}
