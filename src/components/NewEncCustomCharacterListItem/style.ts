import styled from 'styled-components';
import { Toolbar } from '@material-ui/core';
import { Palette } from '@material-ui/core/styles/createPalette';

export const NewEncCustomCharacterListItemContainer = styled(Toolbar)`
    && {
        padding: 0 6px;
        min-height: 56px;
        height: 56px;
    }
`;

export interface CounterProps {
    palette: Palette;
    children: number | null;
}

export const Counter = styled.div<CounterProps>`
    width: 18px;
    height: 18px;
    margin: 12px;
    border-radius: 2px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    color: white;
    background-color: white;
    cursor: pointer;
    user-select: none;

    transition: background-color 300ms, border-color 300ms;

    ${props => props.children ? `
        background-color: ${props.palette.primary.main};
        border: 2px solid rgba(0, 0, 0, ${props.palette.primary.main});
    ` : `
        border: 2px solid rgba(0, 0, 0, 0.54);
    `}
`;
