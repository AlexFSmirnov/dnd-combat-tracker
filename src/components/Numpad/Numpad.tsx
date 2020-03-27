import React, { useState } from 'react';
import { useMediaQuery } from '@material-ui/core';
import { KeyboardArrowUp, KeyboardArrowDown } from '@material-ui/icons';
import { SquareFrame, ScrollFrame, FancyFrame } from '../Frame';
import {
    NumpadFrameContainer,
    NumpadContainer,
    NumpadValueContainer,
    NumpadValueWrapper,
    NumpadValue,
    NumpadButtonContainer,
    NumpadButtonValueContainer,
    NumpadButtonValue,
} from './style';

interface NumpadButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    color?: string;
    padding?: string;
    short?: boolean;
}

const NumpadButton: React.FC<NumpadButtonProps> = ({ children, padding, color, onClick, short }) => {
    const [backgroundColor, setBackgroundColor] = useState('white');

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
        setBackgroundColor('#ccc');
        setTimeout(() => setBackgroundColor('white'), 100);
    };

    return (
        <NumpadButtonContainer onClick={handleClick} short={short}>
            <SquareFrame forceUpdateProp={short} color={color || '#555'} backgroundColor={backgroundColor} />
            <NumpadButtonValueContainer>
                <NumpadButtonValue style={{ padding }} short={short}>{children}</NumpadButtonValue>
            </NumpadButtonValueContainer>
        </NumpadButtonContainer>
    );
};

export interface NumpadProps {
    short?: boolean;
}

const Numpad = ({ short }: NumpadProps) => {
    const [currentValue, setCurrentValue] = useState(0);

    const handleValueClick = () => setCurrentValue(0);
    const handleButtonClick = (number: number) => () => setCurrentValue(v => v * 10 + number);
    const handleSubmit = (sign: number) => () => {
        console.log(`Submitted: ${sign * currentValue}`);
        setCurrentValue(0);
    };

    return (
        <NumpadFrameContainer short={short}>
            <FancyFrame forceUpdateProp={short} backgroundColor="rgba(255, 255, 255, 0.8)" />
            <NumpadContainer short={short}>
                <NumpadValueContainer onClick={handleValueClick}>
                    <NumpadValueWrapper>
                        <NumpadValue>{currentValue || ''}</NumpadValue>
                        <ScrollFrame color="#555" backgroundColor="white" />
                    </NumpadValueWrapper>
                </NumpadValueContainer>
                <NumpadButton short={short} onClick={handleButtonClick(7)}>7</NumpadButton>
                <NumpadButton short={short} onClick={handleButtonClick(8)}>8</NumpadButton>
                <NumpadButton short={short} onClick={handleButtonClick(9)}>9</NumpadButton>
                <NumpadButton short={short} onClick={handleButtonClick(4)}>4</NumpadButton>
                <NumpadButton short={short} onClick={handleButtonClick(5)}>5</NumpadButton>
                <NumpadButton short={short} onClick={handleButtonClick(6)}>6</NumpadButton>
                <NumpadButton short={short} onClick={handleButtonClick(1)}>1</NumpadButton>
                <NumpadButton short={short} onClick={handleButtonClick(2)}>2</NumpadButton>
                <NumpadButton short={short} onClick={handleButtonClick(3)}>3</NumpadButton>
                <NumpadButton short={short} onClick={handleSubmit(-1)} padding={`${short ? 4 : 8}px 0 0 0`} color='#b13735'><KeyboardArrowDown fontSize={short ? 'default' : 'large'} /></NumpadButton>
                <NumpadButton short={short} onClick={handleButtonClick(0)}>0</NumpadButton>
                <NumpadButton short={short} onClick={handleSubmit(1)} padding={`${short ? 4 : 8}px 0 0 0`} color='#08a300'><KeyboardArrowUp fontSize={short ? 'default' : 'large'} /></NumpadButton>
            </NumpadContainer>
        </NumpadFrameContainer>
    );
};

export default Numpad;
