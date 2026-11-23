'use client'

import { useRouter } from 'next/navigation';
import { useActionState } from 'react';
import { createCalendar, type ActionResponse } from '@/app/actions/calendars';

type CreateCalendarProps = {
    def?: boolean;
}

const initialActionState: ActionResponse = {
    success: false,
    message: '',
}

export default function CreateCalendar({ def }: CreateCalendarProps) {
    const router = useRouter();
    const [state, dispatchAction, isPending] = useActionState<ActionResponse>(async (prevState: ActionResponse ) => {
        const data = {
            name: 'Personal'
        }

        try {
            const result = await createCalendar(data);

            if (result.success) {
                result.calendar ? router.push(`/app/${result.calendar.slug}`) : router.refresh();
            }

            return result;
        } catch (err) {
            console.error(err);
            return {
                success: false,
                message: "Failed to create new calendar",
            }
        }
    }, initialActionState)

    return (
        <button onClick={dispatchAction} disabled={isPending}>Create your first calendar</button>
    );
}