import styled from 'styled-components';

export const RootComponentContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

export interface BackgroundImageProps {
    src?: string;
    opacity: number;
}

export const BackgroundImage = styled.div<BackgroundImageProps>`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: ${props => props.opacity};
    transition: opacity 100ms;
    background-image: url("${props => props.src}");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const RootComponentWrapper = styled.div`
    position: absolute;
    top: 56px;
    left: 0;
    width: 100%;
    height: calc(100% - 64px);
    display: flex;
    justify-content: center;
`;

export const ContentContainer = styled.div<{ small?: boolean }>`
    width: 100%;
    height: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${props => props.small && 'align-items: center;'}
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
