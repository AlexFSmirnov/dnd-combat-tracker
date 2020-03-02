import { Character } from '../types';
import {
    CHARACTER_ADDED,
    CHARACTER_UPDATED,
    CHARACTER_MAX_HP_UPDATED,
    CHARACTER_DELETED,
    CHARACTER_FETCH_FAILED,
    CHARACTER_ALREADY_EXISTS,
    CharacterUpdatedAction,
    CharacterMaxHpUpdatedAction,
    CharacterActionType,
    CharacterDeletedAction,
} from '../actions/types';

export type CharactersState = Character[];

const initialState: CharactersState = [];

const updateCharacterById = (state: CharactersState, action: CharacterUpdatedAction) => {
    const { id, character } = action.payload;
    const prevCharacter = state.find(c => c.id === id);
    if (prevCharacter) {
        const index = state.indexOf(prevCharacter);
        return [...state.slice(0, index), character, ...state.slice(index + 1)];
    }
    return [...state, character];
};

const updateMaxHpById = (state: CharactersState, action: CharacterMaxHpUpdatedAction) => {
    const { id, maxHp } = action.payload;
    const character = state.find(c => c.id === id);
    if (character) {
        const index = state.indexOf(character);
        return [...state.slice(0, index), { ...character, maxHitPoints: maxHp }, ...state.slice(index + 1)];
    }
    return [...state];
};

const deleteById = (state: CharactersState, action: CharacterDeletedAction) => {
    const { id } = action.payload;
    const character = state.find(c => c.id === id);
    if (character) {
        const index = state.indexOf(character);
        return [...state.slice(0, index), ...state.slice(index + 1)];
    }
    return [...state];
};

export const characters = (state = initialState, action: CharacterActionType) => {
    switch (action.type) {
    case CHARACTER_ADDED:
        return [...state, action.payload];

    case CHARACTER_UPDATED:
        return updateCharacterById(state, action);

    case CHARACTER_MAX_HP_UPDATED:
        return updateMaxHpById(state, action);

    case CHARACTER_DELETED:
        return deleteById(state, action);

    case CHARACTER_ALREADY_EXISTS:
    case CHARACTER_FETCH_FAILED:
    default:
        return state;
    }
};
