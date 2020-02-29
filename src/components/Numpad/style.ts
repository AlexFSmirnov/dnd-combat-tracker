import styled from 'styled-components';

export const NumpadContainer = styled.div`
    width: 256px;
    padding: 8px;
    padding-bottom: 0;
    border: 2px solid #b13735;
    border-radius: 8px;
    box-shadow: 0 0 10px #333;
    background-color: rgba(255, 255, 255, 0.5);
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
