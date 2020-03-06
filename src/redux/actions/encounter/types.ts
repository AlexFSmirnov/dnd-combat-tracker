import { Character, NPC } from '../../types';

export const ENC_CHARACTER_ADDED = 'ENC_CHARACTER_ADDED';
export const ENC_NPC_ADDED = 'ENC_NPC_ADDED';

export interface EncCharacterAddedAction { 
    type: typeof ENC_CHARACTER_ADDED;
    payload: Character;
}

export interface EncNPCAddedAction {
    type: typeof ENC_NPC_ADDED;
    payload: NPC;
}

export type EncounterActionType = EncCharacterAddedAction | EncNPCAddedAction;
