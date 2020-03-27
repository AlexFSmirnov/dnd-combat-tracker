import styled from 'styled-components';
import { Avatar as AvatarMui } from '@material-ui/core';

interface Multisize {
    small?: boolean;
}

export const EntityListItemScrollContainer = styled.div<Multisize>`
    height: ${props => props.small ? '56' : '80'}px;

    &:not(:last-child) {
        margin-bottom: 8px;
    }
`;

export const EntityListItemContainer = styled.div`
    position: relative;
    height: 100%;
`;

export const EntityListItemWrapper = styled.div<Multisize>`
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 8px;
    display: flex;
    align-items: center;
    box-sizing: border-box;

    ${props => props.small && `
        border-radius: 4px;
        box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12);
        padding-left: 0;
    `}
`;

export const AvatarWrapper = styled.div<Multisize>`
    ${props => props.small ? `
        width: 40px;
        height: 40px;
        min-width: 40px;
        min-height: 40px;
    ` : `
        width: 60px;
        height: 60px;
        min-width: 60px;
        min-height: 60px;
    `}
    margin: 0 8px;
`;

export const Avatar = styled(AvatarMui)`
    && {
        height: 100%;
        width: 100%;
    }
`;

export const NameAndSavesContainer = styled.div<Multisize>`
    height: ${props => props.small ? '40' : '64'}px;
    margin-right: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`;

export const Name = styled.div<Multisize>`
    font-size: ${props => props.small ? '18' : '24'}px;
    line-height: ${props => props.small ? '18' : '24'}px;
`;

export const SavesContainer = styled.div<Multisize>`
    height: 20px;
    width: 100%;
`;

export const HitPointsContainer = styled.div<Multisize>`
    height: ${props => props.small ? '40' : '64'}px;
    width: ${props => props.small ? '144' : '200'}px;
    margin-left: auto;
    margin-right: ${props => props.small ? '8' : '16'}px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const HitPoints = styled.div<{ width: number } & Multisize>`
    font-size: ${props => props.small ? '20' : '32'}px;
    line-height: ${props => props.small ? '20' : '32'}px;
    width: ${props => props.width}px;
    text-align: center;
`;
