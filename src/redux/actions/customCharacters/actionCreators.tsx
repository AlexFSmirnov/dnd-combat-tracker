import React from 'react';
import { Dispatch } from 'redux';
import { CustomCharacter, State } from '../../types';
import { openErrorDialog } from '../ui';
import {
    CUSTOM_CHARACTER_ADDED,
    CUSTOM_CHARACTER_DELETED,
    CUSTOM_CHARACTER_UPDATED,
} from './types';

export const addCustomCharacterSafe = (character: CustomCharacter) => (dispatch: Dispatch<any>, getState: () => State) => {
    const { customCharacters } = getState();
    if (customCharacters && customCharacters.find(c => c.name === character.name)) {
        dispatch(openErrorDialog(<>Custom character with this name already exists.</>));
    } else {
        dispatch(addCustomCharacter(character));
    }
};

export const addCustomCharacter = (character: CustomCharacter) => ({
    type: CUSTOM_CHARACTER_ADDED,
    payload: character,
});

export const deleteCustomCharacter = (character: CustomCharacter) => ({
    type: CUSTOM_CHARACTER_DELETED,
    payload: character,
});

export interface UpdateCustomCharacterProps {
    originalCharacter: CustomCharacter;
    updatedCharacter: CustomCharacter;
}

export const updateCustomCharacterSafe = (props: UpdateCustomCharacterProps) => (dispatch: Dispatch<any>, getState: () => State) => {
    const { customCharacters } = getState();
    const { originalCharacter, updatedCharacter } = props;
    if (customCharacters && (originalCharacter.name !== updatedCharacter.name) && customCharacters.find(c => c.name === updatedCharacter.name)) {
        dispatch(openErrorDialog(<>Custom character with this name already exists.</>));
    } else {
        dispatch(updateCustomCharacter(props));
    }
};

export const updateCustomCharacter = (props: UpdateCustomCharacterProps) => ({
    type: CUSTOM_CHARACTER_UPDATED,
    payload: props,
});
