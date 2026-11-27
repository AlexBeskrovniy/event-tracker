import { z } from 'zod';

// Normalize dayjs and native Date 0-based month value for visible parts of the app
export function displayedMonth(month: number): number {
    return month + 1;
}

// Returned date string YYYY-MM-DD
export function numsToDate(y: number, m: number, d: number): string{
    const month = m .toString().padStart(2, '0');
    const day = d.toString().padStart(2, '0');

    return `${y}-${month }-${day}`;
}

// Receives date string YYYY-MM-DD
export function dateToNums(date: string): [number, number, number] | null {
    const isoDate = z.iso.date();
    try {
        isoDate.parse(date);
        const [y, m, d] = date.split('-');
        
        return [Number(y), Number(m), Number(d)];
    } catch (err) {
        console.error(err)
        return null;
    }
}
