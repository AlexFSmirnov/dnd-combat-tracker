import { Character } from '../types';

export const CHARACTER_ADDED = 'CHARACTER_ADDED';
export const CHARACTER_FETCH_FAILED = 'CHARACTER_FETCH_FAILED';
export const CHARACTER_ALREADY_EXISTS = 'CHARACTER_ALREADY_EXISTS';

export interface CharacterAddedAction {
    type: typeof CHARACTER_ADDED;
    payload: Character;
}

export interface CharacterFetchFailedAction {
    type: typeof CHARACTER_FETCH_FAILED;
    error: string;
}

export interface CharacterAlreadyExistsAction {
    type: typeof CHARACTER_ALREADY_EXISTS;
}
