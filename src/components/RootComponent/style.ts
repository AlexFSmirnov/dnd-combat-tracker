import styled from 'styled-components';

export interface RootComponentContainerProps {
    backgroundImageSrc?: string;
}

export const RootComponentContainer = styled.div<RootComponentContainerProps>`
    width: 100%;
    height: 100%;
    background-image: url("${props => props.backgroundImageSrc}");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
`;

export const ContentContainer = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const ListAndNumpadContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;

    & > :not(:last-child) {
        margin-right: 32px;
    }
`;

export const NotesContainer = styled.div`
    display: flex;
    justify-content: center;
`;
