import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import {
    FrameContainer,
    FrameTopRowContainer,
    FrameMiddleRowContainer,
    FrameBottomRowContainer,
    FrameMiddleFill,
    TopLeftCornerStyles,
    TopRightCornerStyles,
    BottomLeftCornerStyles,
    BottomRightCornerStyles,
    TopStyles,
    BottomStyles,
    LeftStyles,
    RightStyles,
} from './style';
import { SquareCorner, SquareTop, SquareSide } from './svg/square';
import { ScrollCorner, ScrollTop, ScrollSide } from './svg/scroll';
import { FancyCorner, FancyTop, FancySide } from './svg/fancy';

export interface FrameProps {
    color?: string;
    backgroundColor?: string;
    className?: string;
    forceUpdateProp?: boolean;
}

export interface FrameFactoryProps {
    partSize: number;
    Corner: React.ComponentType<FramePartProps>;
    Top: React.ComponentType<FramePartProps>;
    Side: React.ComponentType<FramePartProps>;
}

export interface FramePartProps extends FrameProps {
    width: number;
    height: number;
}

const frameFactory = ({
    partSize,
    Corner,
    Top,
    Side,
}: FrameFactoryProps) => {
    const FrameTopLeftCorner = styled(Corner)`${TopLeftCornerStyles}`;
    const FrameTopRightCorner = styled(Corner)`${TopRightCornerStyles}`;
    const FrameBottomLeftCorner = styled(Corner)`${BottomLeftCornerStyles}`;
    const FrameBottomRightCorner = styled(Corner)`${BottomRightCornerStyles}`;
    const FrameTop = styled(Top)`${TopStyles}`;
    const FrameBottom = styled(Top)`${BottomStyles}`;
    const FrameLeft = styled(Side)`${LeftStyles}`;
    const FrameRight = styled(Side)`${RightStyles}`;

    const Frame: React.FC<FrameProps> = ({ color = '#b13735', backgroundColor, className, forceUpdateProp }) => {
        const containerRef = useRef<HTMLDivElement | null>(null);

        const [topPartWidth, setTopPartWidth] = useState<number>(partSize);
        const [sidePartHeight, setSidePartHeight] = useState<number>(partSize);

        useEffect(() => {
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

        useEffect(() => {
            handleResize();
        }, [containerRef, forceUpdateProp]);

        const handleResize = () => {
            const { current: container } = containerRef;
            if (container) {
                setTopPartWidth(Math.max(container.clientWidth - partSize * 2, 0));
                setSidePartHeight(Math.max(container.clientHeight - partSize * 2, 0));
            }
        };

        const framePartProps: FramePartProps = { color, backgroundColor, width: partSize, height: partSize };

        return (
            <FrameContainer ref={containerRef} className={className}>
                {containerRef.current
                    ? (
                        <React.Fragment>
                            <FrameTopRowContainer>
                                <FrameTopLeftCorner {...framePartProps} />
                                <FrameTop {...framePartProps} width={topPartWidth} />
                                <FrameTopRightCorner {...framePartProps} />
                            </FrameTopRowContainer>
                            <FrameMiddleRowContainer>
                                <FrameLeft {...framePartProps} height={sidePartHeight} />
                                <FrameMiddleFill {...framePartProps} height={sidePartHeight} width={topPartWidth} />
                                <FrameRight {...framePartProps} height={sidePartHeight} />
                            </FrameMiddleRowContainer>
                            <FrameBottomRowContainer>
                                <FrameBottomLeftCorner {...framePartProps} />
                                <FrameBottom {...framePartProps} width={topPartWidth} />
                                <FrameBottomRightCorner {...framePartProps} />
                            </FrameBottomRowContainer>
                        </React.Fragment>
                    )
                    : null
                }
            </FrameContainer>
        );
    };

    return Frame;
};

export const SquareFrame = frameFactory({ partSize: 32, Corner: SquareCorner, Top: SquareTop, Side: SquareSide });
export const ScrollFrame = frameFactory({ partSize: 32, Corner: ScrollCorner, Top: ScrollTop, Side: ScrollSide });
export const FancyFrame = frameFactory({ partSize: 100, Corner: FancyCorner, Top: FancyTop, Side: FancySide });

export default frameFactory;
