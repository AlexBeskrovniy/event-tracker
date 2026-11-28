'use client'

import dayjs from 'dayjs'
import { useState } from 'react';
import { numsToDate } from '@/lib/helpers';
import Cell from '@/app/components/Cell';
import WeekBar from '@/app/components/WeekBar';
import Navigation from '@/app/components/Nav';
import EventForm from '@/app/components/EventForm';
import { useCalendarContext } from '@/app/components/CalendarProvider';
import { Event } from '@/db/schema';

const initMonth = dayjs().month();
const initYear = dayjs().year();
const initDay = dayjs().get('date');

const formDefaultDate = numsToDate(initYear, initMonth, initDay);

export default function Month() {
    const calendar = useCalendarContext();
    if (!calendar) return;

    const [month, setMonth] = useState<number>(initMonth);
    const [year, setYear] = useState<number>(initYear);

    const changeMonth = (dir: number) => {
        if (month === 0 && dir === -1) {
          setYear(year - 1);
          setMonth(11);
          return;
        }
    
        if (month === 11 && dir === 1) {
          setYear(year + 1);
          setMonth(0);
          return;
        }
        setMonth(month + dir);
    }

    const { events } = calendar;
    const DAYS_IN_MONTH = dayjs().month(month).daysInMonth();
    const selectedMonthTitle = dayjs().month(month).year(year).format('MMMM YYYY');
    const isCurrentMonthAndYear = month === dayjs().get('month') && year === dayjs().get('year');
    const TODAY = dayjs().get('date');

    const dayCells = [];
    for (let i = 1; i <= DAYS_IN_MONTH; i++) {
        const hasData = events.length > 0 && !!events.find((event: Event) => {;
            const dayDisplayedDate = numsToDate(year, month, i);
            return event.date === dayDisplayedDate;
        });

        dayCells.push(
            <Cell
                key={i}
                day={i}
                month={month}
                year={year}
                isToday={i === TODAY && isCurrentMonthAndYear}
                hasData={hasData}
            />);
    }

    return (
        <>
            <h3 className='mb-8'>{ selectedMonthTitle }</h3>
            <h1>{ calendar.slug }</h1>
            <h1>{ calendar.user?.name }</h1>
            <div className='mb-8'>
                <WeekBar />
                <div className='grid gap-1 grid-cols-7 grid-rows-6'>
                    { dayCells }
                </div>
            </div>
            <Navigation changeMonth={changeMonth} />
            <EventForm defaultDate={formDefaultDate} />
        </>
    );
}