import styled from 'styled-components';

export const NotesContainer = styled.div`
    position: relative;
    width: 920px;
    height: 260px;
    margin-top: 16px;
`;

export const NotesWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 24px);
    height: calc(100% - 16px);
    margin: 8px 12px;
    background-color: cyan;
`;
