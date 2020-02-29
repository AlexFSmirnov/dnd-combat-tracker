import styled from 'styled-components';

export const EntityListContainer = styled.div`
    width: 50%;
    max-width: 600px;
    height: 440px;
    padding: 8px;

    background-color: rgba(255, 255, 255, 0.5);
    border: 2px solid #b13735;
    border-radius: 8px;
    box-shadow: 0 0 10px #333;

    display: flex;
    flex-direction: column;
    flex: 1;

    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
`;
