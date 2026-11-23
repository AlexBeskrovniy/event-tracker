'use server'

import { db } from '@/db/drizzle';
import { calendars, type Calendar } from '@/db/schema'; // TODO: Temporary type, need to use infered type from zod scheme
import { auth } from '@/lib/auth/server';

export type ActionResponse = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
  error?: string;
}

export async function createCalendar(calendar: {name: string}): Promise<ActionResponse & { calendar?: Calendar }> {
    try {
        const { data: session } = await auth.getSession();
        
        if (!session?.user) {
            return {
                success: false,
                message: 'Unauthorized access',
                error: 'Unauthorized'
            }
        }

        // Validate calendar data here before insertion

        const newCalendar = await db.insert(calendars).values({
            name: calendar.name,
            slug: calendar.name.toLowerCase(),
            userId: session.user.id
        }).returning();

        return {
            success: true,
            message: 'Succesfully created your personal calendar',
            calendar: newCalendar[0]
        }

    } catch(err) {
        console.error(err);

        return {
            success: false,
            message: 'An error occured while creating the calendar',
            error: 'Failed to create calendar'
        }
    }
}