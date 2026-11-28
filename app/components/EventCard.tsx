import { type Event } from '@/db/schema';
import Icon, { Icons } from '@/app/components/ui/Icon';
import Badge from './PriorityBadge';

type EventCardProps = {
    event: Event
}

export default function EventCard({ event }: EventCardProps) {
    return (
        <div className='relative bg-(--background-contrast) text-(--text-color) border border-white p-4'>
            <div className='flex-center'>
                <div className='font-bold'>
                    {event.title}
                </div>
                <Badge priority={event.priority} />
            </div>
            <div className='text-sm opacity-35'>
                {event.description || 'No notes'}
            </div>
            <div className='flex-between mt-2'>
                <div className='flex-center size-8 bg-(--background-highlight) rounded-full cursor-pointer'>
                    <input type="checkbox" defaultChecked={event.completed} hidden />
                    {event.completed && <Icon id={Icons.CHECK} />}
                </div>
                <div className='flex-center size-8 bg-(--background-highlight) rounded-full cursor-pointer'>
                    <Icon id={Icons.BIN} />
                </div>
            </div>
            <div className='text-3xl text-[#007C00] p-1 absolute top-[50%] left-[70%] translate-y-[-50%] -rotate-45 border border-[#007C00] rounded-[10px]' hidden={!event.completed}>
                Done
            </div>
        </div>
    );
}
