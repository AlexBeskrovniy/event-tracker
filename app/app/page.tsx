import Link from 'next/link';
import { auth } from '@/lib/auth/server';
import { getCalendars } from '@/lib/dal';
import CreateCalendar from '../components/CreateCalendar';
import Header from '@/app/components/Header';

export default async function App() {
    const { data: session } = await auth.getSession();

    if (!session) return;

    const calendars = await getCalendars(session.user.id);
   
    return (
        <>
        <Header user={session.user} />
        { calendars.length > 0
            ? (
                <ul>
                    {calendars.map(calendar => (
                        <li key={calendar.id}>
                            <div>{calendar.name}</div>
                            <Link href={`app/${calendar.slug}`}>Link to calendar</Link>
                        </li>
                    ))}
                </ul>
            )
            : (
                <CreateCalendar def={true} />
            )
        }
        </>
    );
}