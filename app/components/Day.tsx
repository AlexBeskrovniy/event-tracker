'use client';

import { useCalendarContext } from '@/app/components/CalendarProvider';
import Link from 'next/link';

export default function Day() {
    const data = useCalendarContext();

    if (!data) return;

    return (
        <>
            <p>Slug: {data.slug}</p>
            <p>{data.user?.name}</p>
            <Link href={`/app/${data.slug}`}>Back to the month</Link>
        </>
    );
}
