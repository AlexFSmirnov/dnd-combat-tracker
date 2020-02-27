import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Character } from '../../redux/types';
import { updateCharacterById } from '../../redux/actions/characters';
import { CharacterListItemContainer, Avatar, NameAndSavesContainer, Name, SavesContainer, HitPointsContainer, HitPoints } from './style';

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
        <CharacterListItemContainer>
            <Avatar src={avatarUrl || '/avatar-placeholder.png'} />
            <NameAndSavesContainer>
                <Name>{name}</Name>
                <SavesContainer />
            </NameAndSavesContainer>
            <HitPointsContainer>
                <HitPoints>{maxHitPoints - removedHitPoints}/{maxHitPoints} [{temporaryHitPoints}]</HitPoints>
            </HitPointsContainer>
        </CharacterListItemContainer>
    );
};

export default connect(null, { updateCharacterById })(CharacterListItem);
