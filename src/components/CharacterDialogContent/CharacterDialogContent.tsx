import React from 'react';
import { SavedCharactersList } from '../SavedCharactersList';
import { CharacterDialogContentContainer } from './style';
import { SavedNPCsList } from '../SavedNPCsList';

const CharacterDialogContent = () => {
    return (
        <CharacterDialogContentContainer>
            <SavedCharactersList />
            <SavedNPCsList />
        </CharacterDialogContentContainer>
    );
};

export default CharacterDialogContent;
