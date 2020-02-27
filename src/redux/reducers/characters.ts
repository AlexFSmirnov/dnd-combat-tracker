import { Character } from '../types';
import {
    CHARACTER_ADDED,
    CHARACTER_UPDATED,
    CHARACTER_FETCH_FAILED,
    CHARACTER_ALREADY_EXISTS,
    CharacterActionType,
} from '../actions/types';

const initialState: Character[] = [];

export const characters = (state = initialState, action: CharacterActionType) => {
    switch (action.type) {
    case CHARACTER_ADDED:
        return [...state, action.payload];

    case CHARACTER_UPDATED:
        const { id, character } = action.payload;
        const prevCharacter = state.find(c => c.id === id);
        if (prevCharacter) {
            const index = state.indexOf(prevCharacter);
            return [...state.slice(0, index), character, ...state.slice(index + 1)];
        }
        return [...state, character];

    case CHARACTER_ALREADY_EXISTS:
    case CHARACTER_FETCH_FAILED:
    default:
        return state;
    }
};
