import styled, { css } from 'styled-components';

interface Multiheight {
    short?: boolean;
}

export const EntityListContainer = styled.div<{ fullWidth?: boolean, fullScreen?: boolean } & Multiheight>`
    position: relative;
    ${props => props.fullWidth ? `
        width: 98%;
        height: calc(100% - ${props.fullScreen ? 138 : 100}px);
    ` : `
        width: 50%;
        max-width: 600px;
        height: ${props.short ? '420' : '480'}px;
    `}
`;

export const EntityListWrapper = styled.div`
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

export const Divider = styled.div<{ color: string }>`
    width: 100%;
    margin-bottom: 16px;
    border: 1px solid ${props => props.color};
    border-radius: 50%;
    opacity: 0.5;
`;
