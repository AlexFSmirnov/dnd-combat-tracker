import React, { useState } from 'react';
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
import { KeyboardArrowUp, KeyboardArrowDown } from '@material-ui/icons';

interface NumpadButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    color?: string;
    padding?: string;
}

const NumpadButton: React.FC<NumpadButtonProps> = ({ children, padding, color, onClick }) => {
    const [backgroundColor, setBackgroundColor] = useState('white');

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
        setBackgroundColor('#ccc');
        setTimeout(() => setBackgroundColor('white'), 100);
    };

    return (
        <NumpadButtonContainer onClick={handleClick}>
            <SquareFrame color={color || '#555'} backgroundColor={backgroundColor} />
            <NumpadButtonValueContainer>
                <NumpadButtonValue style={{ padding }}>{children}</NumpadButtonValue>
            </NumpadButtonValueContainer>
        </NumpadButtonContainer>
    );
};

const Numpad = () => {
    const [currentValue, setCurrentValue] = useState(0);

    const handleValueClick = () => setCurrentValue(0);
    const handleButtonClick = (number: number) => () => setCurrentValue(v => v * 10 + number);
    const handleSubmit = (sign: number) => () => {
        console.log(`Submitted: ${sign * currentValue}`);
        setCurrentValue(0);
    };

    return (
        <NumpadFrameContainer>
            <FancyFrame backgroundColor="rgba(255, 255, 255, 0.8)" />
            <NumpadContainer>
                <NumpadValueContainer onClick={handleValueClick}>
                    <NumpadValueWrapper>
                        <NumpadValue>{currentValue || ''}</NumpadValue>
                        <ScrollFrame color="#555" backgroundColor="white" />
                    </NumpadValueWrapper>
                </NumpadValueContainer>
                <NumpadButton onClick={handleButtonClick(7)}>7</NumpadButton>
                <NumpadButton onClick={handleButtonClick(8)}>8</NumpadButton>
                <NumpadButton onClick={handleButtonClick(9)}>9</NumpadButton>
                <NumpadButton onClick={handleButtonClick(4)}>4</NumpadButton>
                <NumpadButton onClick={handleButtonClick(5)}>5</NumpadButton>
                <NumpadButton onClick={handleButtonClick(6)}>6</NumpadButton>
                <NumpadButton onClick={handleButtonClick(1)}>1</NumpadButton>
                <NumpadButton onClick={handleButtonClick(2)}>2</NumpadButton>
                <NumpadButton onClick={handleButtonClick(3)}>3</NumpadButton>
                <NumpadButton onClick={handleSubmit(-1)} padding='8px 0 0 0' color='#b13735'><KeyboardArrowDown fontSize="large" /></NumpadButton>
                <NumpadButton onClick={handleButtonClick(0)}>0</NumpadButton>
                <NumpadButton onClick={handleSubmit(1)} padding='8px 0 0 0' color='#08a300'><KeyboardArrowUp fontSize="large" /></NumpadButton>
            </NumpadContainer>
        </NumpadFrameContainer>
    );
};

export default Numpad;
