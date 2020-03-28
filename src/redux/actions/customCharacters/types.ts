import { CustomCharacter } from '../../types';

export const CUSTOM_CHARACTER_ADDED = 'CUSTOM_CHARACTER_ADDED';
export const CUSTOM_CHARACTER_DELETED = 'CUSTOM_CHARACTER_DELETED';
export const CUSTOM_CHARACTER_UPDATED = 'CUSTOM_CHARACTER_UPDATED';

export interface CustomCharacterAddedActionType {
    type: typeof CUSTOM_CHARACTER_ADDED;
    payload: CustomCharacter;
}

export interface CustomCharacterDeletedActionType {
    type: typeof CUSTOM_CHARACTER_DELETED;
    payload: CustomCharacter;
}

export interface CustomCharacterUpdatedActionType {
    type: typeof CUSTOM_CHARACTER_UPDATED;
    payload: { 
        originalCharacter: CustomCharacter;
        updatedCharacter: CustomCharacter;
    };
}

export type CustomCharacterActionType = CustomCharacterAddedActionType | CustomCharacterDeletedActionType | CustomCharacterUpdatedActionType;
