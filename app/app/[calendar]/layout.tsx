import CalendarProvider from "@/app/components/CalendarProvider";
import { PropsWithChildren } from "react";
import { notFound } from 'next/navigation';
import { auth } from '@/lib/auth/server';
import { getOneCalendar } from '@/lib/dal';

export default async function CalendarLayout({ params, children }: PropsWithChildren & { params: Promise<{calendar: string}> }) {
    const { data: session } = await auth.getSession();
    if (!session?.user) return;

    const { calendar } = await params;
    const currentCalendar = await getOneCalendar(session.user.id, calendar) 

    if (!currentCalendar) {
        notFound();
    } 
    return (
        <CalendarProvider key={calendar} calendar={currentCalendar}>
            { children }
        </CalendarProvider>
    );
}
