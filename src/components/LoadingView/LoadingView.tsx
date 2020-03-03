import React from 'react';
import { LoadingViewBackground, LoadingViewContainer, LoadingViewImage, LoadingViewText } from './style';

const LoadingView = () => (
    <LoadingViewBackground>
        <LoadingViewContainer>
            <LoadingViewImage src={`${process.env.PUBLIC_URL}/fire.gif`} />
            <LoadingViewText>Loading</LoadingViewText>
        </LoadingViewContainer>
    </LoadingViewBackground>
);

export default LoadingView;
