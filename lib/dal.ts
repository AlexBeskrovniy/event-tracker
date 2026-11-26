import { db } from '@/db/drizzle';

export type CalendarDTO = {
    id: string;
    name: string;
    slug: string;
    userId: string;
    user: {
        name: string;
        email: string;
    } | null;
    events: {
        id: string;
        date: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        completed: boolean;
        description: string | null;
        priority: "low" | "medium" | "high";
        calendarId: string;
    }[];
} | undefined


export async function getCalendars(userId: string) {
    //   'use cache'
    //   cacheTag('issues')
    try {
        const result = await db.query.calendars.findMany({
            where: {
                userId
            },
            with: { user: true },
            orderBy: {
                createdAt: 'desc'
            }
        })

        return result
    } catch (err) {
        console.error('Error fetching calendars:', err)
        throw new Error('Failed to fetch calendars')
    }
}

export async function getOneCalendar(userId: string, slug: string) {
    try {
        const result: CalendarDTO = await db.query.calendars.findFirst({
            where: {
                userId,
                slug
            },
            columns: {
                createdAt: false,
                updatedAt: false
            },
            with: {
                user: {
                    columns: {
                        name: true,
                        email: true
                    }
                },
                events: true
            }
        })
console.log(result);
        return result;
        
    } catch (err) {
        console.error('Error finding calendar', err);
        throw new Error('Failed to fetch calendar');
    }
}

export async function getEvents(calendarId: string, date: string) {
    try {
        const result = await db.query.events.findMany({
            where: {
                calendarId,
                date
            }
        })

        return result;
    } catch (err) {
        console.error('Error fetching events', err);
        throw new Error('Failed to fetch events');
    }

}

export async function getOneEvent(id: string) {
    try {
        const result = await db.query.events.findFirst({
            where: {
                id
            }
        });

        return result;
    } catch (err) {
        console.error('Error finding calendar', err);
        throw new Error('Failed to fetch event');
    }
}