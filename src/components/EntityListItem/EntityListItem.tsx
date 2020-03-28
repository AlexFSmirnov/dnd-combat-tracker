import React, { useEffect, useMemo, useState } from 'react';
import { connect } from 'react-redux';
import { isNaN } from 'lodash/fp';
import { useTheme, useMediaQuery, Menu, TextField, Button, ThemeProvider, createMuiTheme } from '@material-ui/core';
import { DeathSaves, State } from '../../redux/types';
import { updateCharacterById } from '../../redux/actions/characters';
import { selectEntity, updateNPCHitPoints } from '../../redux/actions/encounter';
import { Concentration } from '../Concentration';
import { SquareFrame } from '../Frame';
import {
    EntityListItemScrollContainer,
    EntityListItemContainer,
    EntityListItemWrapper,
    NameAndSavesContainer,
    Avatar,
    Name,
    SavesContainer,
    SaveItem,
    HitPointsContainer,
    HitPoints,
    AvatarWrapper,
    HitPointMenuContentWrapper,
    HitPointMenuButtonWrapper,
} from './style';

interface StateProps {
    selectedKey: number | null;
}

interface DispatchProps {
    updateCharacterById: (id: number, maxHitPoints: number) => void;
    selectEntity: typeof selectEntity;
    updateNPCHitPoints: typeof updateNPCHitPoints;
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

    color: string;
    id?: number;
    avatarUrl?: string;
    isInCurrentTurn?: boolean;
    isCurrentlyFirst?: boolean;
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
    isInCurrentTurn,
    isCurrentlyFirst,
    color,
    selectedKey,
    updateCharacterById,
    selectEntity,
    updateNPCHitPoints,
}) => {
    const theme = useTheme();
    const small = useMediaQuery(theme.breakpoints.down('sm'));

    const [menuAnchorElement, setMenuAnchorElement] = useState<HTMLElement | null>(null);
    const [menuInputValue, setMenuInputValue] = useState('');

    const isSelected = useMemo(() => selectedKey === entityKey, [selectedKey, entityKey]);

    useEffect(() => {
        if (type === EntityType.CHARACTER && id) {
            updateCharacterById(id, maxHitPoints);
        }
    }, [type, id, maxHitPoints, updateCharacterById, isSelected, isCurrentlyFirst]);

    const openMenu = (e: React.MouseEvent<HTMLElement>) => setMenuAnchorElement(e.currentTarget);
    const closeMenu = () => {
        selectEntity(null);
        setMenuAnchorElement(null);
        setMenuInputValue('');
    };

    const handleMenuInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setMenuInputValue(e.target.value);

    const handleClick = () => {
        selectEntity(isSelected ? null : entityKey);
    };

    const handleDamageClick = () => {
        const updateHP = parseInt(menuInputValue);
        if (!isNaN(updateHP)) {
            updateNPCHitPoints(entityKey, -Math.abs(updateHP), 0);
        }
        closeMenu();
    };

    const handleTempClick = () => {
        const updateHP = parseInt(menuInputValue);
        if (!isNaN(updateHP)) {
            updateNPCHitPoints(entityKey, 0, Math.abs(updateHP));
        }
        closeMenu();
    };

    const handleHealClick = () => {
        const updateHP = parseInt(menuInputValue);
        if (!isNaN(updateHP)) {
            updateNPCHitPoints(entityKey, Math.abs(updateHP), 0);
        }
        closeMenu();
    };

    return (
        <EntityListItemScrollContainer small={small}>
            <EntityListItemContainer>
                {small ? null : <SquareFrame color={color} backgroundColor={isSelected ? '#ddd' : 'white' } />}
                <EntityListItemWrapper small={small} isSelected={isSelected}>
                    <AvatarWrapper small={small} onClick={handleClick}>
                        <Avatar src={avatarUrl} variant="rounded" />
                    </AvatarWrapper>
                    <NameAndSavesContainer small={small} onClick={handleClick}>
                        <Name small={small}>{name}</Name>
                        <SavesContainer small={small}>
                            {deathSaves && !small && (removedHitPoints >= maxHitPoints) ? (
                                <React.Fragment>
                                    <SaveItem fail enabled={(deathSaves.failCount && deathSaves.failCount > 0) || false} />
                                    <SaveItem fail enabled={(deathSaves.failCount && deathSaves.failCount > 1) || false} />
                                    <SaveItem fail enabled={(deathSaves.failCount && deathSaves.failCount > 2) || false} />
                                    <div style={{ width: '16px' }} />
                                    <SaveItem enabled={(deathSaves.successCount && deathSaves.successCount > 0) || false} />
                                    <SaveItem enabled={(deathSaves.successCount && deathSaves.successCount > 1) || false} />
                                    <SaveItem enabled={(deathSaves.successCount && deathSaves.successCount > 2) || false} />
                                </React.Fragment>
                            ) : null}
                        </SavesContainer>
                    </NameAndSavesContainer>
                    <div style={{ flex: 1 }} />
                    <Concentration entityKey={entityKey} color={color} small={small} isInCurrentTurn={isInCurrentTurn} />
                    <HitPointsContainer small={small} onClick={type === EntityType.NPC ? openMenu : undefined}>
                        <HitPoints small={small} width={small ? 64 : 48}>{maxHitPoints - removedHitPoints}</HitPoints>
                        <HitPoints small={small} width={small ? 16 : 12} style={{ color: 'grey' }}>/</HitPoints>
                        <HitPoints small={small} width={small ? 64 : 48}>{maxHitPoints}</HitPoints>
                        <HitPoints small={small} width={small ? 48 : 36} style={{ color: 'grey' }}>[{temporaryHitPoints}]</HitPoints>
                    </HitPointsContainer>
                    <Menu anchorEl={menuAnchorElement} open={!!menuAnchorElement} onClose={closeMenu} style={{ marginTop: small ? '70px' : '80px' }}>
                        <HitPointMenuContentWrapper>
                            <TextField style={{ width: '100%' }} label="Hit Points" type="number" autoFocus value={menuInputValue} onChange={handleMenuInputChange} />
                            <HitPointMenuButtonWrapper>
                                <Button variant="contained" color="primary" onClick={handleDamageClick}>Damage</Button>
                                <Button variant="outlined" color="secondary" onClick={handleTempClick}>Temp</Button>
                                <ThemeProvider theme={createMuiTheme({ ...theme, palette: { ...theme.palette, primary: { main: '#08a300' }}})}>
                                    <Button variant="contained" color="primary" onClick={handleHealClick}>Heal</Button>
                                </ThemeProvider>
                            </HitPointMenuButtonWrapper>
                        </HitPointMenuContentWrapper>
                    </Menu>
                </EntityListItemWrapper>
            </EntityListItemContainer>
        </EntityListItemScrollContainer>
    );
};

const mapStateToProps = (state: State) => ({
    selectedKey: (state.encounter && state.encounter.selectedEntityKey !== null) ? state.encounter.selectedEntityKey : null,
});

export default connect(mapStateToProps, { updateCharacterById, selectEntity, updateNPCHitPoints })(EntityListItem);
