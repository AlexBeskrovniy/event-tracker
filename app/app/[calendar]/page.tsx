import { notFound } from 'next/navigation';
import { auth } from '@/lib/auth/server';
import { getOneUserCalendar } from '@/lib/dal';
import { Suspense } from 'react';
import Month from '@/app/components/Month';

export default async function Calendar({ params }: { params: Promise<{calendar: string}> }) {
    const { data: session } = await auth.getSession();
    if (!session) return;
    const { calendar } = await params;
    console.log(calendar)
    const currentCalendar = await getOneUserCalendar(session.user.id, calendar) 

    if (!currentCalendar) {
        notFound();
    } 
   
    return (
        <Suspense fallback={<p>...Loading...</p>}>
            {session?.user ? (
                <>
                <p>{session.user.name}</p>
                <div>{session.user.email}</div>
                <p>{currentCalendar.name}</p>
                <Month />
                </>
            ) : (<p>Not logged in</p>)}
        </Suspense>
    );
}
