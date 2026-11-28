'use client';

import dayjs from 'dayjs';
import Link from 'next/link';
import { Event } from '@/db/schema';
import { useCalendarContext } from '@/app/components/CalendarProvider';
import Icon, { Icons } from '@/app/components/ui/Icon';
import EventCard from '@/app/components/EventCard';

type DayProps = {
    date: string;
}

export default function Day({ date }: DayProps) {
    const data = useCalendarContext();
    if (!data) return;

    const dayEvents = data.events.filter((event: Event) => (event.date === date));
    const DATE = dayjs(date).format('MMMM D dddd, YYYY');

    return (
        <>
            <div className='flex items-center justify-between'>
                <Link 
                    href={`/app/${data.slug}`}
                    className='flex items-center justify-center gap-2 text-white cursor-pointer hover:opacity-65'
                >
                    <Icon id={Icons.ANGLE_LEFT} />
                    Back
                </Link>
                <h4>{DATE}</h4>
            </div>
            <div className='flex flex-col gap-2'>
                {dayEvents.length > 0 ? (
                    dayEvents.map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))
                ) : (
                    <h1>No data</h1>
                )}
            </div>
        </>
    );
}





    // useEffect(() => {
    //     const updatedFormDefaultDate = dateInputValueFormater(Number(year), Number(month), Number(day))
    //     setFormDefaultDate(updatedFormDefaultDate);
    //
    //     return () => {
    //         setFormDefaultDate(initFormDefaultDate);
    //     }
    // }, [year, month, day]);

