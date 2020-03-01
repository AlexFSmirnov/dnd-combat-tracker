import styled, { css } from 'styled-components';

export const EntityListContainer = styled.div`
    position: relative;
    width: 50%;
    max-width: 600px;
    height: 480px;
`;

export const EntityListWrapper = styled.div`
    height: 448px;
    padding: 16px;

    display: flex;
    flex-direction: column;
    flex: 1;

    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const EntityListFade = css`
    position: absolute;
    left: calc(2%);
    width: 96%;
    border-radius: 16px;
    height: 20px;
`;

export const EntityListTopFade = styled.div`
    ${EntityListFade}
    top: 0;
    background: linear-gradient(white, transparent);
`;

export const EntityListBottomFade = styled.div`
    ${EntityListFade}
    bottom: 0;
    background: linear-gradient(transparent, white);
`;
