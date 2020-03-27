import styled, { css } from 'styled-components';

interface WithFullScreen {
    fullScreen?: boolean;
}

interface Multiheight {
    short?: boolean;
}

export const EntityListContainer = styled.div<WithFullScreen & Multiheight>`
    position: relative;
    ${props => props.fullScreen ? `
        width: 98%;
        height: calc(100% - 160px);
    ` : `
        width: 50%;
        max-width: 600px;
        height: ${props.short ? '420' : '480'}px;
    `}
`;

export const EntityListWrapper = styled.div<WithFullScreen>`
    height: calc(100% - 32px);
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
