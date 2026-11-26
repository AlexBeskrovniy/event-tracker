'use client';

import dayjs from 'dayjs'
// import { Link } from 'react-router-dom';
import Link from 'next/link';
import { CSSProperties } from 'react';

type CellProps = {
    day: number;
    month: number;
    year: number;
    isToday: boolean;
    hasData: boolean;
}

interface MyCustomCSS extends CSSProperties {
    '--grid-start-position': number;
}

export default function Cell({ day, month, year, isToday, hasData }: CellProps) {
    const activeClass = isToday ? 'active' : '';
    const filledClass = hasData ? 'filled': '';
    
    const dayObj = new Date(year, month, day);

    const dayIndex = dayjs(dayObj).day();
    // Handling 'Sunday' and 'Saturday'
    const holidayClass = dayIndex === 6 || dayIndex === 0 ? 'holiday' : '';
    
    // || 7 - because of 'Sunday' dayjs index === 0
    const monthFirstDayPosition = day === 1 ? dayIndex || 7 : null;
    
    const classMods = `${holidayClass} ${activeClass} ${filledClass}`;

    return (
        <div
            className={`relative bg-(--background-contrast) text-white place-items-center py-4 cursor-pointer hover:bg-(--background-highlight) first:col-start-(--grid-start-position) ${classMods}`}
            style={monthFirstDayPosition ? {'--grid-start-position': monthFirstDayPosition} as MyCustomCSS : {}}>
            {/*<Link to={`/${year}/${month}/${day}`} className='cell-link' />*/}
            <Link href={`/app/personal/${year}/${month}/${day}`} className='abs-full'></Link>
            <span>{day}</span>
        </div>
    );
}

