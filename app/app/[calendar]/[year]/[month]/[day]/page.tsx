import Day from '@/app/components/Day';

export default async function DayPage({ params }: { params: Promise<{ calendar: string, year: string, month: string, day: string }>}) {
    const { calendar, year, month, day } = await params;

    return (
        <>
            <p>{`${year}-${month}-${day}`}</p>
            <p>Calendar url part: {calendar}</p>
            <Day />
        </>
    )
}
