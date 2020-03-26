import { Character, NPC } from '../../types';

export const ENC_CHARACTER_ADDED = 'ENC_CHARACTER_ADDED';
export const ENC_NPC_ADDED = 'ENC_NPC_ADDED';
export const ENC_CHARACTER_REMOVED = 'ENC_CHARACTER_REMOVED';
export const ENC_NPC_REMOVED = 'ENC_NPC_REMOVED';
export const ENC_CHARACTER_INITIATIVE_UPDATED = 'ENC_CHARACTER_INITIATIVE_UPDATED';
export const ENC_NPC_INITIATIVE_UPDATED = 'ENC_NPC_INITIATIVE_UPDATED';
export const ENC_RESET = 'ENC_RESET';

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

export interface EncCharacterInitiativeUpdatedAction {
    type: typeof ENC_CHARACTER_INITIATIVE_UPDATED;
    payload: {
        character: Character;
        initiative: number;
    };
}

export interface EncNPCInitiativeUpdatedAction {
    type: typeof ENC_NPC_INITIATIVE_UPDATED;
    payload: {
        npc: NPC;
        initiative: number;
    };
}

export interface EncResetAction {
    type: typeof ENC_RESET;
}

export type EncounterActionType = EncCharacterAddedAction |
    EncNPCAddedAction |
    EncCharacterRemovedAction |
    EncNPCRemovedAction |
    EncCharacterInitiativeUpdatedAction |
    EncNPCInitiativeUpdatedAction |
    EncResetAction;
