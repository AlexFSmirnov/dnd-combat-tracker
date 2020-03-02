import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Character } from '../../redux/types';
import { updateCharacterById } from '../../redux/actions/characters';
import { SquareFrame } from '../Frame';
import {
    CharacterListItemScrollContainer,
    CharacterListItemContainer,
    CharacterListItemWrapper,
    Avatar,
    NameAndSavesContainer,
    Name,
    SavesContainer,
    HitPointsContainer,
    HitPoints,
} from './style';

export interface DispatchProps {
    updateCharacterById: (id: number, maxHitPoints: number) => void;
}

export interface CharacterListItemProps {
    character: Character;
}

const CharacterListItem: React.FC<CharacterListItemProps & DispatchProps> = ({ character, updateCharacterById }) => {
    const { id, name, maxHitPoints, removedHitPoints, temporaryHitPoints, deathSaves, avatarUrl, themeColor, defaultBackdrop } = character;

    useEffect(() => updateCharacterById(id, maxHitPoints), [id, maxHitPoints, updateCharacterById]);

    return (
        <CharacterListItemScrollContainer>
            <CharacterListItemContainer>
                <SquareFrame color={(themeColor && themeColor.themeColor) || undefined} backgroundColor="white" />
                <CharacterListItemWrapper>
                    <Avatar src={avatarUrl || `${process.env.PUBLIC_URL}/avatar-placeholder.png`} color={(themeColor && themeColor.themeColor) || undefined} />
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
                </CharacterListItemWrapper>
            </CharacterListItemContainer>
        </CharacterListItemScrollContainer>
    );
};

export default connect(null, { updateCharacterById })(CharacterListItem);
