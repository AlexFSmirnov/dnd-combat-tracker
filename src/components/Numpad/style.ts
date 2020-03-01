import styled from 'styled-components';

export const NumpadFrameContainer = styled.div`
    position: relative;
    width: 288px;
    height: 480px;
`;

export const NumpadContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 256px;
    height: 460px;
    padding: 16px;
    padding-bottom: 0;

    display: flex;
    flex-wrap: wrap;
`;

export const NumpadValueContainer = styled.div`
    width: 256px;
    height: 80px;
    margin-bottom: 16px;
`;

export const NumpadValueWrapper = styled.div`
    position: absolute;
    width: 256px;
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

export const NumpadButtonContainer = styled.div`
    position: relative;
    width: 80px;
    height: 80px;
    margin-bottom: 8px;

    &:not(:nth-child(3n + 1)) {
        margin-right: 8px;
    }
`;

export const NumpadButtonValueContainer = styled.div`
    position: absolute;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NumpadButtonValue = styled.div`
    font-size: 40px;
    line-height: 40px;
    text-align: center;
    user-select: none;
`;
