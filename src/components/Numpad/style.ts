import styled from 'styled-components';

interface Multiheight {
    short?: boolean;
}

export const NumpadFrameContainer = styled.div<Multiheight>`
    position: relative;
    width: ${props => props.short ? '243' : '288'}px;
    height: ${props => props.short ? '420' : '480'}px;
`;

export const NumpadContainer = styled.div<Multiheight>`
    position: absolute;
    top: 0;
    left: 0;

    width: ${props => props.short ? '211' : '256'}px;
    height: ${props => props.short ? '400' : '460'}px;
    padding: 16px;
    padding-bottom: 0;

    display: flex;
    flex-wrap: wrap;
`;

export const NumpadValueContainer = styled.div<Multiheight>`
    width: 100%;
    height: 80px;
    margin-bottom: 16px;
`;

export const NumpadValueWrapper = styled.div<Multiheight>`
    position: absolute;
    width: calc(100% - 32px);
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NumpadValue = styled.div`
    font-size: 40px;
    line-height: 40px;
    user-select: none;
    z-index: 10;
`;

export const NumpadButtonContainer = styled.div<Multiheight>`
    position: relative;
    width: ${props => props.short ? '65' : '80'}px;
    height: ${props => props.short ? '65' : '80'}px;
    margin-bottom: 8px;

    &:not(:nth-child(3n + 1)) {
        margin-right: 8px;
    }
`;

export const NumpadButtonValueContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NumpadButtonValue = styled.div<Multiheight>`
    font-size: ${props => props.short ? '30' : '40'}px;
    line-height: ${props => props.short ? '30' : '40'}px;
    text-align: center;
    user-select: none;
`;
