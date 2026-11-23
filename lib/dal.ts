import { db } from '@/db/drizzle';
import { calendars } from '@/db/schema';
import { auth } from '@/lib/auth/server';
import { eq, desc, and } from 'drizzle-orm';

export async function getUserCalendars(userId: string) {
    //   'use cache'
    //   cacheTag('issues')
    try {
        const result = await db
            .select({
                id: calendars.id,
                name: calendars.name,
                slug: calendars.slug,
                createdAt: calendars.createdAt
            })
            .from(calendars)
            .where(eq(calendars.userId, userId))
            .orderBy(desc(calendars.createdAt))
        return result
    } catch (err) {
        console.error('Error fetching calendars:', err)
        throw new Error('Failed to fetch calendars')
    }
}

export async function getOneUserCalendar(userId: string, slug: string) {
    try {
        const result = await db
            .select({
                id: calendars.id,
                name: calendars.name,
                slug: calendars.slug,
                createdAt: calendars.createdAt
            })
            .from(calendars)
            .where(and(eq(calendars.userId, userId), eq(calendars.slug, slug)));
        console.log(result)
        return result[0];
        
    } catch (err) {
        console.error('Error finding calendar', err);
        throw new Error('Failed to fetch calendar')
    }
}

// export async function getEvents() {

// }