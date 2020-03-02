import styled from 'styled-components';
import { Avatar as AvatarMui } from '@material-ui/core';

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

export const Avatar = styled(AvatarMui)`
    && {
        height: 60px;
        width: 60px;
    }
    margin: 0 8px;
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
