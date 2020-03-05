import React, { useEffect } from 'react';
import { connect } from 'react-redux';
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
} from './style';
import { useTheme } from '@material-ui/core';

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
    removedHitPoints: number;
    temporaryHitPoints: number;
    deathSaves?: DeathSaves;

    avatarUrl?: string;
    color?: string;
}

const EntityListItem: React.FC<EntityListItemProps & DispatchProps> = ({
    id,
    type,
    name,
    maxHitPoints,
    removedHitPoints,
    temporaryHitPoints,
    deathSaves,
    avatarUrl,
    color,
    updateCharacterById,
}) => {
    const theme = useTheme();

    useEffect(() => {
        if (type === EntityType.CHARACTER && id) {
            updateCharacterById(id, maxHitPoints);
        }
    }, [type, id, maxHitPoints, updateCharacterById]);

    return (
        <EntityListItemScrollContainer>
            <EntityListItemContainer>
                <SquareFrame color={type === EntityType.CHARACTER ? color : theme.palette.secondary.main} backgroundColor="white" />
                <EntityListItemWrapper>
                    <Avatar src={avatarUrl} variant="rounded" />
                    <NameAndSavesContainer>
                        <Name>{name}</Name>
                        <SavesContainer />
                    </NameAndSavesContainer>
                    <HitPointsContainer>
                        <HitPoints width={64}>{maxHitPoints - removedHitPoints}</HitPoints>
                        <HitPoints width={16} style={{ color: 'grey' }}>/</HitPoints>
                        <HitPoints width={64}>{maxHitPoints}</HitPoints>
                        <HitPoints width={48} style={{ color: 'grey' }}>[{temporaryHitPoints}]</HitPoints>
                    </HitPointsContainer>
                </EntityListItemWrapper>
            </EntityListItemContainer>
        </EntityListItemScrollContainer>
    );
};

export default connect(null, { updateCharacterById })(EntityListItem);
