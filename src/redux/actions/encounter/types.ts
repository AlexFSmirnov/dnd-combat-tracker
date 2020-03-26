import { Character, NPC } from '../../types';

export const ENC_CHARACTER_ADDED = 'ENC_CHARACTER_ADDED';
export const ENC_NPC_ADDED = 'ENC_NPC_ADDED';
export const ENC_CHARACTER_REMOVED = 'ENC_CHARACTER_REMOVED';
export const ENC_NPC_REMOVED = 'ENC_NPC_REMOVED';

export interface EncCharacterAddedAction { 
    type: typeof ENC_CHARACTER_ADDED;
    payload: Character;
}

export interface EncNPCAddedAction {
    type: typeof ENC_NPC_ADDED;
    payload: NPC;
}

export interface EncCharacterRemovedAction { 
    type: typeof ENC_CHARACTER_REMOVED;
    payload: Character;
}

export interface EncNPCRemovedAction {
    type: typeof ENC_NPC_REMOVED;
    payload: NPC;
}

export type EncounterActionType = EncCharacterAddedAction | EncNPCAddedAction | EncCharacterRemovedAction | EncNPCRemovedAction;
