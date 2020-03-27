import React, { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { useTheme, useMediaQuery } from '@material-ui/core';
import { DeathSaves, State } from '../../redux/types';
import { updateCharacterById } from '../../redux/actions/characters';
import { selectEntity } from '../../redux/actions/encounter';
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

interface StateProps {
    selectedKey: number | null;
}

interface DispatchProps {
    updateCharacterById: (id: number, maxHitPoints: number) => void;
    selectEntity: typeof selectEntity;
}

export enum EntityType {
    CHARACTER = 'CHARACTER',
    NPC = 'NPC',
}

export interface EntityListItemProps {
    entityKey: number;
    type: EntityType;
    name: string;

    maxHitPoints: number;
    removedHitPoints?: number;
    temporaryHitPoints?: number;
    deathSaves?: DeathSaves;

    id?: number;
    avatarUrl?: string;
    color?: string;
}

const EntityListItem: React.FC<EntityListItemProps & StateProps & DispatchProps> = ({
    id,
    entityKey,
    type,
    name,
    maxHitPoints,
    removedHitPoints = 0, 
    temporaryHitPoints = 0,
    deathSaves,
    avatarUrl,
    color,
    selectedKey,
    updateCharacterById,
    selectEntity,
}) => {
    const theme = useTheme();
    const small = useMediaQuery(theme.breakpoints.down('sm'));

    const isSelected = useMemo(() => selectedKey === entityKey, [selectedKey, entityKey]);

    useEffect(() => {
        if (type === EntityType.CHARACTER && id) {
            updateCharacterById(id, maxHitPoints);
        }
    }, [type, id, maxHitPoints, updateCharacterById]);

    const handleClick = () => {
        if (!small && type === EntityType.NPC) {
            selectEntity(isSelected ? null : entityKey);
        }
    };

    return (
        <EntityListItemScrollContainer small={small}>
            <EntityListItemContainer onClick={handleClick}>
                {small ? null : <SquareFrame color={type === EntityType.CHARACTER ? color : theme.palette.secondary.main} backgroundColor={isSelected ? '#ddd' : 'white' } />}
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

const mapStateToProps = (state: State) => ({
    selectedKey: (state.encounter && state.encounter.selectedEntityKey !== null) ? state.encounter.selectedEntityKey : null,
});

export default connect(mapStateToProps, { updateCharacterById, selectEntity })(EntityListItem);
