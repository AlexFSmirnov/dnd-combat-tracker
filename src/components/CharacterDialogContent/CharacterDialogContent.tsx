import React from 'react';
import { SavedCharactersList } from '../SavedCharactersList';
import { CharacterDialogContentContainer } from './style';

const CharacterDialogContent = () => {
    return (
        <CharacterDialogContentContainer>
            <SavedCharactersList />
        </CharacterDialogContentContainer>
    );
};

export default CharacterDialogContent;
