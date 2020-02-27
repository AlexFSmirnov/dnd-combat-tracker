import { Character } from '../types';
import {
    CharacterAddedAction,
    CharacterFetchFailedAction,
    CharacterAlreadyExistsAction,
    CHARACTER_ADDED,
    CHARACTER_FETCH_FAILED,
    CHARACTER_ALREADY_EXISTS
} from '../actions/types';

const initialState: Character[] = [];
type ActionType = CharacterAddedAction | CharacterFetchFailedAction | CharacterAlreadyExistsAction;

export const characters = (state = initialState, action: ActionType) => {
    switch (action.type) {
    case CHARACTER_ADDED:
        return [...state, action.payload];
    case CHARACTER_ALREADY_EXISTS:
    case CHARACTER_FETCH_FAILED:
    default:
        return state;
    }
};
