import React from 'react';
import { LoadingViewBackground, LoadingViewContainer, LoadingViewImage, LoadingViewText } from './style';

const LoadingView = () => (
    <LoadingViewBackground>
        <LoadingViewContainer>
            <LoadingViewImage src="/fire.gif" />
            <LoadingViewText>Loading</LoadingViewText>
        </LoadingViewContainer>
    </LoadingViewBackground>
);

export default LoadingView;
