import { NPC } from '../../types';

export const NPC_ADDED = 'NPC_ADDED';
export const NPC_DELETED = 'NPC_DELETED';
export const NPC_UPDATED = 'NPC_UPDATED';

export interface NPCAddedActionType {
    type: typeof NPC_ADDED;
    payload: NPC;
}

export interface NPCDeletedActionType {
    type: typeof NPC_DELETED;
    payload: NPC;
}

export interface NPCUpdatedActionType {
    type: typeof NPC_UPDATED;
    payload: { 
        originalNPC: NPC;
        updatedNPC: NPC;
    };
}

export type NPCActionType = NPCAddedActionType | NPCDeletedActionType | NPCUpdatedActionType;
