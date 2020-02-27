import styled from 'styled-components';

export const LoadingViewBackground = styled.div`
    width: 100%;
    height: 100%;
    background-color: #666666;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LoadingViewContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const LoadingViewImage = styled.img`
    width: 400px;
    max-width: 80%;
`;

export const LoadingViewText = styled.div`
    font-size: 40px;
    line-height: 40px;
    color: orange;
`;
