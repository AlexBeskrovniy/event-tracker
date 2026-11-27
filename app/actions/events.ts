'use server'

import { z } from 'zod';
import { db } from '@/db/drizzle';
import { events, type Event } from '@/db/schema';
import { auth } from '@/lib/auth/server';

const EventInputSchema = z
    .object({
        date: z.iso.date('Invalid date'),
        title: z.string().min(1, 'Title must contain at least one character'),
        priority: z.enum(['low', 'medium', 'high'], 'Invalid "priority" value'),
        description: z.string().max(255, 'Too long notes').optional().nullable(),
        calendarId: z.string('Calendar ID is required')

    })

export type EventInputData = z.infer<typeof EventInputSchema>;

type ZodTreeifyErrors = {
    errors: string[],
    properties?: Record<string, { errors?: string[] }>
}

export type ActionResponse = {
  success: boolean;
  message: string;
  errors?: ZodTreeifyErrors
  error?: string;
}

export async function createEvent(_prevState: ActionResponse, formData: FormData): Promise<ActionResponse> {
    try {
        const { data: session } = await auth.getSession();
        
        if (!session?.user) {
            return {
                success: false,
                message: 'Unauthorized access',
                error: 'Unauthorized'
            }
        }

        const data = {
            date: formData.get('date') as string,
            title: formData.get('title') as string,
            priority: formData.get('priority') as string,
            description: formData.get('description') as string,
            calendarId: formData.get('calendar_id') as string
        }

        const validationResult = EventInputSchema.safeParse(data);
        if (!validationResult.success) {
            console.log(validationResult.error)
            return {
                success: false,
                message: 'Validation failed',
                errors: z.treeifyError(validationResult.error),
            }
        }
        
        const validatedData = validationResult.data;
        await db.insert(events).values({
            date: validatedData.date,
            title: validatedData.title,
            priority: validatedData.priority,
            description: validatedData.description || null,
            calendarId: validatedData.calendarId
        })

        return {
            success: true,
            message: 'Succesfully created event'
        }
    } catch (err) {
        console.error(err)

        return {
            success: false,
            message: 'An error occured while creating the calendar',
            error: 'Failed to create event'
        }
    }
}
