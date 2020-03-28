import { CustomCharacter } from '../types';
import {
    CUSTOM_CHARACTER_ADDED,
    CUSTOM_CHARACTER_DELETED,
    CUSTOM_CHARACTER_UPDATED,
    CustomCharacterActionType,
    CustomCharacterDeletedActionType,
    CustomCharacterUpdatedActionType,
} from '../actions/customCharacters';

export type CustomCharactersState = CustomCharacter[];

const initialState: CustomCharactersState = [];

const deleteCustomCharacter = (state: CustomCharactersState, action: CustomCharacterDeletedActionType) => {
    const { payload: character } = action;
    const index = state.indexOf(character);
    if (index !== -1) {
        return [...state.slice(0, index), ...state.slice(index + 1)];
    }
    return [...state];
};

const updateCustomCharacter = (state: CustomCharactersState, action: CustomCharacterUpdatedActionType) => {
    const { payload: { originalCharacter, updatedCharacter } } = action;
    const index = state.indexOf(originalCharacter);
    if (index !== -1) {
        return [...state.slice(0, index), updatedCharacter, ...state.slice(index + 1)];
    }
    return [...state];
};

export const customCharacters = (state = initialState, action: CustomCharacterActionType) => {
    switch (action.type) {
    case CUSTOM_CHARACTER_ADDED:
        return [...state, action.payload];

    case CUSTOM_CHARACTER_DELETED:
        return deleteCustomCharacter(state, action);

    case CUSTOM_CHARACTER_UPDATED:
        return updateCustomCharacter(state, action);

    default:
        return state;
    }
};
