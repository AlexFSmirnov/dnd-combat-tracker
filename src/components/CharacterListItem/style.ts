import styled from 'styled-components';

export const CharacterListItemContainer = styled.div`
    height: 72px;
    margin: 8px 0;
    padding: 6px;
    display: flex;
    align-items: center;
    border: 3px solid blue;
    background-color: white;
`;

export const Avatar = styled.img`
    border-radius: 16px;
    height: 60px;
    width: 60px;
    margin-right: 8px;
    border: 1px solid red;
`;

export const NameAndSavesContainer = styled.div`
    height: 60px;
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
    border: 1px solid yellow;
`;

export const HitPointsContainer = styled.div`
    height: 60px;
    border: 1px solid green;
    margin-left: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const HitPoints = styled.div`
    font-size: 32px;
    line-height: 32px;
`;
