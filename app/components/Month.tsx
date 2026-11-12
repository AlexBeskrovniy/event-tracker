'use client'

import dayjs from 'dayjs'
import { useState } from 'react';
import Cell from '@/app/components/Cell';

// import './Month.scss';
// import WeekBar from '../WeekBar/WeekBar';
// import Cell from '../Cell/Cell';
// import Nav from '../Nav/Nav';
// import { useAuthContext } from '../AuthProvider';


const initMonth = dayjs().month();
const initYear = dayjs().year();
const initDay = dayjs().get('date');

// TODO: helpers candidate
// const dateInputValueFormater = (y: number, m: number, d: number): string => {
//     //dayjs.month() returns month from zero index, fixed it here
//     const month = (m + 1).toString().padStart(2, '0');
//     const day = d.toString().padStart(2, '0');
//
//     return `${y}-${month }-${day}`;
// }
//
// const initFormDefaultDate = dateInputValueFormater(initYear, initMonth, initDay);

export default function Month() {
    const [month, setMonth] = useState<number>(initMonth);
    const [year, setYear] = useState<number>(initYear);

    // const changeMonth = (dir: number) => {
    //     if (month === 0 && dir === -1) {
    //       setYear(year - 1);
    //       setMonth(11);
    //       return;
    //     }
    //
    //     if (month === 11 && dir === 1) {
    //       setYear(year + 1);
    //       setMonth(0);
    //       return;
    //     }
    //     setMonth(month + dir);
    // }

    const DAYS_IN_MONTH = dayjs().month(month).daysInMonth();
    const selectedMonthTitle = dayjs().month(month).year(year).format('MMMM YYYY');
    const isCurrentMonthAndYear = month === dayjs().get('month') && year === dayjs().get('year');
    const TODAY = dayjs().get('date');

    const dayCells = [];
    for (let i = 1; i <= DAYS_IN_MONTH; i++) {
        // const hasData = storage.length > 0 && !!storage.find((record: CustomerDoc) => {
        //     const [y, m, d] = record.date.split('-');
        //     return +y === year && +m === month + 1 && +d === i;
        // });
        const hasData = false;

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
            <h3>{ selectedMonthTitle }</h3>
            <div className='month'>
                <div className='month-cells-wrapper'>
                    { dayCells }
                </div>
            </div>
        </>
    );
}
        // <>
        //     <h3>{ selectedMonthTitle }</h3>
        //     <div className='month'>
        //         <WeekBar />
        //         <div className='month-cells-wrapper'>
        //             { dayCells }
        //         </div>
        //     </div>
        //     <Nav changeMonth={changeMonth} />
        // </>
