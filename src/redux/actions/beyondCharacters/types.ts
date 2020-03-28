import { BeyondCharacter } from '../../types';

export const BEYOND_CHARACTER_ADDED = 'BEYOND_CHARACTER_ADDED';
export const BEYOND_CHARACTER_UPDATED = 'BEYOND_CHARACTER_UPDATED';
export const BEYOND_CHARACTER_MAX_HP_UPDATED = 'BEYOND_CHARACTER_MAX_HP_UPDATED';
export const BEYOND_CHARACTER_DELETED = 'BEYOND_CHARACTER_DELETED';

export const BEYOND_CHARACTER_FETCH_FAILED = 'BEYOND_CHARACTER_FETCH_FAILED';
export const BEYOND_CHARACTER_ALREADY_EXISTS = 'BEYOND_CHARACTER_ALREADY_EXISTS';

export interface BeyondCharacterAddedAction {
    type: typeof BEYOND_CHARACTER_ADDED;
    payload: BeyondCharacter;
}

export interface BeyondCharacterUpdatedAction {
    type: typeof BEYOND_CHARACTER_UPDATED;
    payload: {
        id: number;
        character: BeyondCharacter;
    };
}

export interface BeyondCharacterMaxHpUpdatedAction {
    type: typeof BEYOND_CHARACTER_MAX_HP_UPDATED;
    payload: {
        id: number;
        maxHp: number;
    };
}

export interface BeyondCharacterDeletedAction {
    type: typeof BEYOND_CHARACTER_DELETED;
    payload: {
        id: number;
    };
}

export interface BeyondCharacterFetchFailedAction {
    type: typeof BEYOND_CHARACTER_FETCH_FAILED;
    error: string;
}

export interface BeyondCharacterAlreadyExistsAction {
    type: typeof BEYOND_CHARACTER_ALREADY_EXISTS;
}

export type BeyondCharacterActionType =
    BeyondCharacterAddedAction |
    BeyondCharacterUpdatedAction |
    BeyondCharacterMaxHpUpdatedAction |
    BeyondCharacterDeletedAction | 
    BeyondCharacterFetchFailedAction |
    BeyondCharacterAlreadyExistsAction;
