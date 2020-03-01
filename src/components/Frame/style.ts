import styled, { css } from 'styled-components';
import { FramePartProps } from './Frame';

export const FrameContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    pointer-events: none;
`;

export const FrameTopRowContainer = styled.div`
    display: flex;
`;
export const FrameMiddleRowContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const FrameBottomRowContainer = styled.div`
    display: flex;
`;

export const FrameMiddleFill = styled.div<FramePartProps>`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    ${props => props.backgroundColor && `background-color: ${props.backgroundColor};`}
    transition: background-color 0.3s;
`;

const CornerBaseStyles = css<FramePartProps>`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
`;
export const TopLeftCornerStyles = css<FramePartProps>`
    ${CornerBaseStyles}
`;
export const TopRightCornerStyles = css<FramePartProps>`
    ${CornerBaseStyles}
    transform: rotateY(180deg);
`;
export const BottomLeftCornerStyles = css<FramePartProps>`
    ${CornerBaseStyles}
    transform: rotateY(180deg);
    transform: rotateX(180deg);
`;
export const BottomRightCornerStyles = css<FramePartProps>`
    ${CornerBaseStyles}
    transform: rotate(180deg);
`;

export const TopStyles = css<FramePartProps>`
    height: ${props => props.height}px;
`;
export const BottomStyles = css<FramePartProps>`
    height: ${props => props.height}px;
    transform: rotate(180deg);
`;
export const LeftStyles = css<FramePartProps>`
    width: ${props => props.width}px;
`;
export const RightStyles = css<FramePartProps>`
    width: ${props => props.width}px;
    transform: rotate(180deg);
`;
