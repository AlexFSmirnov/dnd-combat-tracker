import styled from 'styled-components';

export const SavedNPCsListContainer = styled.div<{ small: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    ${props => props.small ? `
        width: 100%;
        padding: 16px;
        box-sizing: border-box;
    ` : `
        width: 40%;
        max-width: 600px;
        margin: 16px;
    `}

    & > :not(:last-child) {
        margin-bottom: 8px;
    }

    & > :last-child {
        margin-top: 8px;
    }
`;
