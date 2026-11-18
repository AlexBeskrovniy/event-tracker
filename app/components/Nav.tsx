import Icon, { Icons } from '@/app/components/ui/Icon';

type NavProps = {
    changeMonth: (dir: number) => void;
}

export default ({ changeMonth }: NavProps) => {
    return (
        <div className='flex justify-between'>
            <span className='flex items-center justify-center text-white bg-(--accent) rounded-full cursor-pointer w-12 h-12' onClick={() => changeMonth(-1)}>
                <Icon id={Icons.DOUBLE_ANGLE_LEFT}/>
            </span>
            <span className='flex items-center justify-center text-white bg-(--accent) rounded-full cursor-pointer w-12 h-12' onClick={() => changeMonth(1)}>
                <Icon id={Icons.DOUBLE_ANGLE_RIGHT}/>
            </span>
        </div>
    );
}