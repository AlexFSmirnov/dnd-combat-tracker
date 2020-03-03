import styled from 'styled-components';

export const SavedCharactersListContainer = styled.div`
    width: 40%;
    max-width: 600px;
    margin: 16px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    & > :not(:last-child) {
        margin-bottom: 8px;
    }
`;
