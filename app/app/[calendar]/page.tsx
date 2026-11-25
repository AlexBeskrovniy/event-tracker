import { notFound } from 'next/navigation';
import { auth } from '@/lib/auth/server';
import { getOneCalendar } from '@/lib/dal';
import Month from '@/app/components/Month';

export default async function CalendarPage({ params }: { params: Promise<{calendar: string}> }) {
    const { data: session } = await auth.getSession();
    if (!session) return;
    const { calendar } = await params;
    const currentCalendar = await getOneCalendar(session.user.id, calendar) 

    if (!currentCalendar) {
        notFound();
    } 
   
    return (
        <>
            {session?.user ? (
                <>
                <p>{session.user.name}</p>
                <div>{session.user.email}</div>
                <p>{currentCalendar.name}</p>
                <Month />
                </>
            ) : (<p>Not logged in</p>)}
        </>
    );
}
