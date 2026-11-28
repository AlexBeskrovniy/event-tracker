import { type EventPriority } from '@/lib/types';
import { CSSProperties } from 'react';

type PriorityBadgeProps = {
    priority: EventPriority;
}

interface BadgeCustomCSSProps extends CSSProperties {
    '--badge-bg': EventPriority
}

// Find better shades
const colorsMap = {
    low: 'green',
    medium: 'yellow',
    high: 'red'
}

export default function PriorityBadge({ priority }: PriorityBadgeProps) {
    return (
        <div
            className={`absolute top-2 right-2 text-md font-bold px-1.5 rounded-md bg-(--badge-bg) text-(--text-color)`}
            style={{'--badge-bg': colorsMap[priority]} as BadgeCustomCSSProps}
        >
            {priority.toUpperCase()}
        </div>
    );
}
