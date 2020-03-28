import { BeyondCharacter } from '../types';
import {
    BEYOND_CHARACTER_ADDED,
    BEYOND_CHARACTER_UPDATED,
    BEYOND_CHARACTER_MAX_HP_UPDATED,
    BEYOND_CHARACTER_DELETED,
    BEYOND_CHARACTER_FETCH_FAILED,
    BEYOND_CHARACTER_ALREADY_EXISTS,
    BeyondCharacterUpdatedAction,
    BeyondCharacterMaxHpUpdatedAction,
    BeyondCharacterActionType,
    BeyondCharacterDeletedAction,
} from '../actions/beyondCharacters';

export type BeyondCharactersState = BeyondCharacter[];

const initialState: BeyondCharactersState = [];

const updateBeyondCharacterById = (state: BeyondCharactersState, action: BeyondCharacterUpdatedAction) => {
    const { id, character } = action.payload;
    const prevBeyondCharacter = state.find(c => c.id === id);
    if (prevBeyondCharacter) {
        const index = state.indexOf(prevBeyondCharacter);
        return [...state.slice(0, index), character, ...state.slice(index + 1)];
    }
    return [...state, character];
};

const updateMaxHpById = (state: BeyondCharactersState, action: BeyondCharacterMaxHpUpdatedAction) => {
    const { id, maxHp } = action.payload;
    const character = state.find(c => c.id === id);
    if (character) {
        const index = state.indexOf(character);
        return [...state.slice(0, index), { ...character, maxHitPoints: maxHp }, ...state.slice(index + 1)];
    }
    return [...state];
};

const deleteById = (state: BeyondCharactersState, action: BeyondCharacterDeletedAction) => {
    const { id } = action.payload;
    const character = state.find(c => c.id === id);
    if (character) {
        const index = state.indexOf(character);
        return [...state.slice(0, index), ...state.slice(index + 1)];
    }
    return [...state];
};

export const beyondCharacters = (state = initialState, action: BeyondCharacterActionType) => {
    switch (action.type) {
    case BEYOND_CHARACTER_ADDED:
        return [...state, action.payload];

    case BEYOND_CHARACTER_UPDATED:
        return updateBeyondCharacterById(state, action);

    case BEYOND_CHARACTER_MAX_HP_UPDATED:
        return updateMaxHpById(state, action);

    case BEYOND_CHARACTER_DELETED:
        return deleteById(state, action);

    case BEYOND_CHARACTER_ALREADY_EXISTS:
    case BEYOND_CHARACTER_FETCH_FAILED:
    default:
        return state;
    }
};
