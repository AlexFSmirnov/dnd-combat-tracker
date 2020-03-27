import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useTheme, useMediaQuery } from '@material-ui/core';
import { DeathSaves } from '../../redux/types';
import { updateCharacterById } from '../../redux/actions/characters';
import { SquareFrame } from '../Frame';
import {
    EntityListItemScrollContainer,
    EntityListItemContainer,
    EntityListItemWrapper,
    NameAndSavesContainer,
    Avatar,
    Name,
    SavesContainer,
    HitPointsContainer,
    HitPoints,
    AvatarWrapper,
} from './style';

export interface DispatchProps {
    updateCharacterById: (id: number, maxHitPoints: number) => void;
}

export enum EntityType {
    CHARACTER = 'CHARACTER',
    NPC = 'NPC',
}

export interface EntityListItemProps {
    id?: number;
    type: EntityType;
    name: string;

    maxHitPoints: number;
    removedHitPoints?: number;
    temporaryHitPoints?: number;
    deathSaves?: DeathSaves;

    avatarUrl?: string;
    color?: string;
}

const EntityListItem: React.FC<EntityListItemProps & DispatchProps> = ({
    id,
    type,
    name,
    maxHitPoints,
    removedHitPoints = 0, 
    temporaryHitPoints = 0,
    deathSaves,
    avatarUrl,
    color,
    updateCharacterById,
}) => {
    const theme = useTheme();
    const small = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        if (type === EntityType.CHARACTER && id) {
            updateCharacterById(id, maxHitPoints);
        }
    }, [type, id, maxHitPoints, updateCharacterById]);

    return (
        <EntityListItemScrollContainer small={small}>
            <EntityListItemContainer>
                {small ? null : <SquareFrame color={type === EntityType.CHARACTER ? color : theme.palette.secondary.main} backgroundColor="white" />}
                <EntityListItemWrapper small={small}>
                    <AvatarWrapper small={small}>
                        <Avatar src={avatarUrl} variant="rounded" />
                    </AvatarWrapper>
                    <NameAndSavesContainer small={small}>
                        <Name small={small}>{name}</Name>
                        <SavesContainer small={small} />
                    </NameAndSavesContainer>
                    <HitPointsContainer small={small}>
                        <HitPoints small={small} width={small ? 64 : 48}>{maxHitPoints - removedHitPoints}</HitPoints>
                        <HitPoints small={small} width={small ? 16 : 12} style={{ color: 'grey' }}>/</HitPoints>
                        <HitPoints small={small} width={small ? 64 : 48}>{maxHitPoints}</HitPoints>
                        <HitPoints small={small} width={small ? 48 : 36} style={{ color: 'grey' }}>[{temporaryHitPoints}]</HitPoints>
                    </HitPointsContainer>
                </EntityListItemWrapper>
            </EntityListItemContainer>
        </EntityListItemScrollContainer>
    );
};

export default connect(null, { updateCharacterById })(EntityListItem);
