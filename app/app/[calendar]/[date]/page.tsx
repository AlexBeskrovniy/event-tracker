import Day from '@/app/components/Day';

export default async function DayPage({ params }: { params: Promise<{ calendar: string, date: string }>}) {
    const { date } = await params;

    return (
        <Day date={date} />
    )
}
