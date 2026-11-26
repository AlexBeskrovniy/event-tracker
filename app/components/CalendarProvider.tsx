'use client';

import { type Calendar, Event } from "@/db/schema";
import { type CalendarDTO } from '@/lib/dal';
import { createContext, useContext, type PropsWithChildren } from "react";

// type CalendarQueryResult = (Omit<Calendar, "createdAt" | "updatedAt"> & { user: { name: string, email: string } & { events: Event[] }  }) | null;
type CalendarContextProps = {
    calendar: CalendarDTO
}


const CalendarContext = createContext<CalendarDTO | null>(null);

export function useCalendarContext() {
    const data = useContext(CalendarContext);
    if (!data) {
        console.warn('Calendar data must be provided');
    }

    return data;
}

export default function CalendarProvider({ calendar, children }: PropsWithChildren<CalendarContextProps>) {
    return (
        <CalendarContext value={calendar}>
            { children }
        </CalendarContext>
    );
}
