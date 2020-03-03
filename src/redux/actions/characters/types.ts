import { Character } from '../../types';

export const CHARACTER_ADDED = 'CHARACTER_ADDED';
export const CHARACTER_UPDATED = 'CHARACTER_UPDATED';
export const CHARACTER_MAX_HP_UPDATED = 'CHARACTER_MAX_HP_UPDATED';
export const CHARACTER_DELETED = 'CHARACTER_DELETED';

export const CHARACTER_FETCH_FAILED = 'CHARACTER_FETCH_FAILED';
export const CHARACTER_ALREADY_EXISTS = 'CHARACTER_ALREADY_EXISTS';

export interface CharacterAddedAction {
    type: typeof CHARACTER_ADDED;
    payload: Character;
}

export interface CharacterUpdatedAction {
    type: typeof CHARACTER_UPDATED;
    payload: {
        id: number;
        character: Character;
    };
}

export interface CharacterMaxHpUpdatedAction {
    type: typeof CHARACTER_MAX_HP_UPDATED;
    payload: {
        id: number;
        maxHp: number;
    };
}

export interface CharacterDeletedAction {
    type: typeof CHARACTER_DELETED;
    payload: {
        id: number;
    };
}

export interface CharacterFetchFailedAction {
    type: typeof CHARACTER_FETCH_FAILED;
    error: string;
}

export interface CharacterAlreadyExistsAction {
    type: typeof CHARACTER_ALREADY_EXISTS;
}

export type CharacterActionType =
    CharacterAddedAction |
    CharacterUpdatedAction |
    CharacterMaxHpUpdatedAction |
    CharacterDeletedAction | 
    CharacterFetchFailedAction |
    CharacterAlreadyExistsAction;
