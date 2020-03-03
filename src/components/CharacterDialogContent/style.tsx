import styled from 'styled-components';

interface Multisize {
    small: boolean;
}

export const CharacterDialogContentContainer = styled.div<Multisize>`
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

export const CharacterDialogContentWrapper = styled.div<Multisize>`
    width: 100%;
    display: flex;
    justify-content: center;

    ${props => props.small && 'flex-direction: column;'}
`;

export const Divider = styled.div<{ color: string } & Multisize>`
    border: 1px solid ${props => props.color};
    border-radius: 50%;
    opacity: 0.5;

    ${props => props.small ? `
        height: 0;
        margin: 16px;
    ` : `
        width: 0;
        margin-top: 56px;
        margin-bottom: 64px;
    `}
`;
