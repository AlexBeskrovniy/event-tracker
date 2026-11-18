import dayjs from 'dayjs'

const days = [1, 2, 3, 4, 5, 6, 0].map(dayIndex => dayjs().day(dayIndex).format('ddd'));

export default () => {
    return (
        <div className='grid gap-1 grid-cols-7 pb-1'>
            { days.map(day => (
                <div className='bg-(--background-highlight) text-white opacity-65 py-4' key={day}>
                    { day }
                </div>
            )) }
        </div>
    );
}