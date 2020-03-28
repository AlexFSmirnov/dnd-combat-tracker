import styled from 'styled-components';
import { Multisize } from './DividedList';

export const DividedListContainer = styled.div<Multisize>`
    width: 100%;
    height: 100%;
    display: flex;

    ${props => props.small ? `
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    ` : `
        justify-content: center;
        align-items: flex-start;
    `}
`;

export const DividedListWrapper = styled.div<Multisize>`
    width: 100%;
    display: flex;
    justify-content: center;

    ${props => props.small && 'flex-direction: column;'}
`;

export const DividedListSublistContainer = styled.div<Multisize>`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    ${props => props.small ? `
        width: 100%;
    ` : `
        width: 500px;
        min-width: 300px;
        max-width: 500px;
        margin: 16px;
    `}

    & > :not(:last-child) {
        margin-bottom: 8px;
    }
`;

export interface DividerProps {
    color: string;
    marginTopOverride?: string;
    marginBottomOverride?: string;
}

export const Divider = styled.div<DividerProps & Multisize>`
    border: 1px solid ${props => props.color};
    border-radius: 50%;
    opacity: 0.5;
    margin-bottom: 10px;

    ${props => props.small ? `
        height: 0;
        margin: 16px;
    ` : `
        width: 0;
        margin-top: 56px;

        ${props.marginTopOverride ? `margin-top: ${props.marginTopOverride}px;` : ''}
        ${props.marginBottomOverride ? `margin-bottom: ${props.marginBottomOverride}px;` : ''}
    `}
`;
