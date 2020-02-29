import React from 'react';
import { FramePartProps } from '../Frame';

const getScrollPart = (transform?: string): React.FC<FramePartProps> => ({
    color,
    backgroundColor,
    width,
    height,
    className
}) => (
    <svg className={className} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${width} ${height}`}>
        {backgroundColor ? <polygon fill={backgroundColor} style={{ zIndex: -2 }} transform={transform} points="8 93 337 93 337 2 8 2 8 93"/> : null}
        <path fill={color} transform={transform} d="M344,6.39V4.47h-6.14V0h-2.68s-1.06,1.54-3.91,1.54H12.73C9.88,1.54,8.82,0,8.82,0H6.14V4.47H0V6.39c2.53,0,2.67,4.14,2.67,4.14V81.91S2.53,86,0,86v2H6.14v7H8.82V3.31H335.18V91.69H8.82V95s1.06-1.54,3.91-1.54H331.27c2.84,0,3.9,1.52,3.91,1.54h2.68V88H344V86c-2.53,0-2.67-4.13-2.67-4.13V10.53S341.47,6.39,344,6.39ZM6.27,81.91H4.14V12.12H6.27Zm333.79.48h-2.12V12.61h2.12Z"/>
    </svg>
);

export const ScrollCorner = getScrollPart();
export const ScrollTop = getScrollPart('translate(-32,0)');
export const ScrollSide = getScrollPart('translate(0,-32)');
