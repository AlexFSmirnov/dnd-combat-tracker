import styled from 'styled-components';

export interface ImageProps {
    opacity: number;
    src?: string;
}

export const Image = styled.div<ImageProps>`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: ${props => props.opacity};
    background-image: url("${props => props.src}");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;
