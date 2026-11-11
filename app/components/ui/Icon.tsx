export enum Icons {
    PLUS='plus',
    CLOSE='close',
    ANGLE_LEFT='angle-left',
    DOUBLE_ANGLE_LEFT='double-angle-left',
    DOUBLE_ANGLE_RIGHT='double-angle-right',
    BIN='bin',
    CARET_DOWN='caret-down',
    CHECK='check'
}

type IconProps = {
    id: Icons;
    size?: string;
}

export default function Icon({ id, size }: IconProps) {
    const svgSize = size || "1em";

    return (
        <svg width={svgSize} height={svgSize}>
            <use href={`#${id}`} />
        </svg>
    );
}
