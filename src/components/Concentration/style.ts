import styled from 'styled-components';

export const ConcentrationContainer = styled.div<{ small?: boolean }>`
    position: relative;
    width: ${props => props.small ? 24 : 32}px;
    height: ${props => props.small ? 24 : 32}px;
    min-width: ${props => props.small ? 24 : 32}px;
    min-height: ${props => props.small ? 24 : 32}px;
    margin-right: ${props => props.small ? 8 : 16}px;
    user-select: none;
`;

export const ConcentrationLetter = styled.div<{ color: string, selected?: boolean, small?: boolean }>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid ${props => props.color};
    border-radius: 8px;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    font-size: ${props => props.small ? 20 : 24}px;
    line-height: ${props => props.small ? 20 : 24}px;

    color: ${props => props.selected ? 'white' : props.color};
    background-color: ${props => props.selected ? props.color : 'rgba(0, 0, 0, 0)'};

    transition: 100ms;
    cursor: pointer;
`;

export const ConcentrationDuration = styled.div<{ color: string, small?: boolean }>`
    position: absolute;
    border: 2px solid white;
    border-radius: 50%;

    ${props => props.small ? `
        top: -8px;
        right: -10px;
        width: 16px;
        height: 16px;
        font-size: 12px;
        line-height: 12px;
    ` : `
        top: -12px;
        right: -14px;
        width: 20px;
        height: 20px;
        font-size: 14px;
        line-height: 14px;
    `}

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    color: white;
    background-color: ${props => props.color};

    transform: scale(0.01);
    transition: transform 100ms;
`;
