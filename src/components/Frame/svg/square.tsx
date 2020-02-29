import React from 'react';
import { FramePartProps } from '../Frame';

const getSquarePart = (transform?: string): React.FC<FramePartProps> => ({
    color,
    backgroundColor,
    width,
    height,
    className
}) => (
    <svg className={className} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${width} ${height}`}>
        {backgroundColor
            ? (
                <path style={{ fill: backgroundColor, zIndex: -1, transition: 'fill 0.3s' }} transform={transform}
                    d="M615.2,646.2c-1.7,5.7-12.9,11.7-14.5,11.7H22.5c-1.7,0-12.8-6-14.5-11.7L8.2,19.3V12S16.1,2.3,23.4,1.4H599.80005c7.3.8,15.1,10.6,15.1,10.6v7.3Z"
                />
            )
            : null
        }
        <path style={{ fill: color, zIndex: 2, boxShadow: '0 0 20px grey' }} transform={transform}
            d="M611.9,0H11L0,11.5v637L11,660H612l11-11.5V11.5ZM3,12.8l9.2-9.6h5.9A25.8384,25.8384,0,0,0,7,12.9H6.9v.2A36.38553,36.38553,0,0,0,3,21.7ZM3,26.9A42.92655,42.92655,0,0,1,6.9,15.7V644.3a13.90069,13.90069,0,0,1-1.1-2.1,51.50646,51.50646,0,0,1-2.9-9L3,26.9Zm9.2,629.9L3,647.2v-8.9a40.90524,40.90524,0,0,0,3.9,8.6v.2H7a24.86426,24.86426,0,0,0,11.1,9.8H12.2Zm10.1,0A22.56646,22.56646,0,0,1,8.6,647V13A23.74954,23.74954,0,0,1,22.4,3.1H600.6a22.56647,22.56647,0,0,1,13.7,9.8v634a23.74956,23.74956,0,0,1-13.8,9.9Zm597.6-9.6-9.2,9.6h-5.9a24.86437,24.86437,0,0,0,11.1-9.8h.1v-.2a36.38635,36.38635,0,0,0,3.9-8.6l.00006,9Zm0-14.1a41.717,41.717,0,0,1-3.9,11.2V15.7a13.89825,13.89825,0,0,1,1.1,2.1,51.50837,51.50837,0,0,1,2.9,9l-.1,606.3Zm0-611.4a40.9054,40.9054,0,0,0-3.9-8.6v-.2h-.1a24.86433,24.86433,0,0,0-11.1-9.8h5.9l9.2,9.6-.00007,9Z"
        />
    </svg>
);

export const SquareCorner = getSquarePart();
export const SquareTop = getSquarePart('translate(-32,0)');
export const SquareSide = getSquarePart('translate(0,-32)');
