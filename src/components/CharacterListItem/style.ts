import styled from 'styled-components';

export const CharacterListItemScrollContainer = styled.div`
    height: 80px;

    &:not(:last-child) {
        margin-bottom: 8px;
    }
`;

export const CharacterListItemContainer = styled.div`
    position: relative;
    height: 100%;
    border-radius: 20px;
`;

export const CharacterListItemWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 8px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
`;

export const Avatar = styled.img<{ color?: string }>`
    border-radius: 16px;
    height: 64px;
    width: 64px;
    margin: 0 8px;
    border: 3px solid ${props => props.color || '#b13735'};
    box-shadow: 0 0 10px grey;
    box-sizing: border-box;
    object-fit: cover;
`;

export const NameAndSavesContainer = styled.div`
    height: 64px;
    margin-right: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`;

export const Name = styled.div`
    font-family: 'Yeon Sung';
    font-size: 24px;
    line-height: 24px;
`;

export const SavesContainer = styled.div`
    height: 20px;
    width: 100%;
`;

export const HitPointsContainer = styled.div`
    height: 64px;
    width: 200px;
    margin-left: auto;
    margin-right: 16px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const HitPoints = styled.div<{ width: number }>`
    font-size: 32px;
    line-height: 32px;
    width: ${props => props.width}px;
    text-align: center;
`;
