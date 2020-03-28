import styled from 'styled-components';
import { Avatar as AvatarMui } from '@material-ui/core';

export const DefaultAvatarList = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const AvatarWrapper = styled.div<{ selected?: boolean, color: string }>`
    margin-top: 16px;
    border: 2px solid ${props => props.selected ? props.color : 'white'};
    border-radius: 6px;
    cursor: pointer;
`;

export const Avatar = styled(AvatarMui)`
    && > {
        width: 56px;
        height: 56px;
    }
`;
