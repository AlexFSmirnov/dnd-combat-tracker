import { Character, NPC } from '../../types';

export const ENC_CHARACTER_ADDED = 'ENC_CHARACTER_ADDED';
export const ENC_NPC_ADDED = 'ENC_NPC_ADDED';
export const ENC_CHARACTER_REMOVED = 'ENC_CHARACTER_REMOVED';
export const ENC_NPC_REMOVED = 'ENC_NPC_REMOVED';
export const ENC_CHARACTER_INITIATIVE_UPDATED = 'ENC_CHARACTER_INITIATIVE_UPDATED';
export const ENC_NPC_INITIATIVE_UPDATED = 'ENC_NPC_INITIATIVE_UPDATED';
export const ENC_RESET = 'ENC_RESET';
export const ENC_CREATED = 'ENC_CREATED';
export const ENC_NEXT_TURN = 'ENC_NEXT_TURN';
export const ENC_PREV_TURN = 'ENC_PREV_TURN';
export const ENC_ENTITY_SELECTED = 'ENC_ENTITY_SELECTED';
export const ENC_NPC_HIT_POINTS_UPDATED = 'ENC_NPC_HIT_POINTS_UPDATED';
export const ENC_TEXT_NOTES_UPDATED = 'ENC_TEXT_NOTES_UPDATED';
export const ENC_IMG_NOTES_UPDATED = 'ENC_IMG_NOTES_UPDATED';
export const ENC_ENTITY_CONCENTRATION_UPDATED = 'ENC_ENTITY_CONCENTRATION_UPDATED';

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

export interface EncCreatedAction {
    type: typeof ENC_CREATED;
}

export interface EncNextTurnAction {
    type: typeof ENC_NEXT_TURN;
}

export interface EncPrevTurnAction {
    type: typeof ENC_PREV_TURN;
}

export interface EncEntitySelectedAction {
    type: typeof ENC_ENTITY_SELECTED;
    payload: {
        key: number | null;
    };
}

export interface EncNPCHitPointsUpdatedAction {
    type: typeof ENC_NPC_HIT_POINTS_UPDATED;
    payload: {
        key: number,
        update: number,
        temp: number,
    };
}

export interface EncTextNotesUpdateAction {
    type: typeof ENC_TEXT_NOTES_UPDATED;
    payload: {
        key: number,
        text: string,
    };
}

export interface EncImgNotesUpdatedAction {
    type: typeof ENC_IMG_NOTES_UPDATED;
    payload: {
        key: number,
        img: string,
    },
}

export interface EncEntityConcentrationUpdatedAction {
    type: typeof ENC_ENTITY_CONCENTRATION_UPDATED;
    payload: {
        key: number,
        since: number | null,
    };
}

export type EncounterActionType = EncCharacterAddedAction |
    EncNPCAddedAction |
    EncCharacterRemovedAction |
    EncNPCRemovedAction |
    EncCharacterInitiativeUpdatedAction |
    EncNPCInitiativeUpdatedAction |
    EncResetAction |
    EncCreatedAction |
    EncNextTurnAction |
    EncPrevTurnAction |
    EncEntitySelectedAction |
    EncNPCHitPointsUpdatedAction |
    EncTextNotesUpdateAction |
    EncImgNotesUpdatedAction |
    EncEntityConcentrationUpdatedAction;
