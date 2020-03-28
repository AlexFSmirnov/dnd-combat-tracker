import { BeyondCharacter, CustomCharacter } from '../../types';

export const ENC_BEYOND_CHARACTER_ADDED = 'ENC_BEYOND_CHARACTER_ADDED';
export const ENC_CUSTOM_CHARACTER_ADDED = 'ENC_CUSTOM_CHARACTER_ADDED';
export const ENC_BEYOND_CHARACTER_REMOVED = 'ENC_BEYOND_CHARACTER_REMOVED';
export const ENC_CUSTOM_CHARACTER_REMOVED = 'ENC_CUSTOM_CHARACTER_REMOVED';
export const ENC_BEYOND_CHARACTER_INITIATIVE_UPDATED = 'ENC_BEYOND_CHARACTER_INITIATIVE_UPDATED';
export const ENC_CUSTOM_CHARACTER_INITIATIVE_UPDATED = 'ENC_CUSTOM_CHARACTER_INITIATIVE_UPDATED';
export const ENC_RESET = 'ENC_RESET';
export const ENC_CREATED = 'ENC_CREATED';
export const ENC_NEXT_TURN = 'ENC_NEXT_TURN';
export const ENC_PREV_TURN = 'ENC_PREV_TURN';
export const ENC_ENTITY_SELECTED = 'ENC_ENTITY_SELECTED';
export const ENC_CUSTOM_CHARACTER_HIT_POINTS_UPDATED = 'ENC_CUSTOM_CHARACTER_HIT_POINTS_UPDATED';
export const ENC_TEXT_NOTES_UPDATED = 'ENC_TEXT_NOTES_UPDATED';
export const ENC_IMG_NOTES_UPDATED = 'ENC_IMG_NOTES_UPDATED';
export const ENC_ENTITY_CONCENTRATION_UPDATED = 'ENC_ENTITY_CONCENTRATION_UPDATED';
export const ENC_BEYOND_CHARACTER_UPDATED_BY_ID = 'ENC_BEYOND_CHARACTER_UPDATED_BY_ID';

export interface EncBeyondCharacterAddedAction { 
    type: typeof ENC_BEYOND_CHARACTER_ADDED;
    payload: BeyondCharacter;
}

export interface EncCustomCharacterAddedAction {
    type: typeof ENC_CUSTOM_CHARACTER_ADDED;
    payload: CustomCharacter;
}

export interface EncBeyondCharacterRemovedAction { 
    type: typeof ENC_BEYOND_CHARACTER_REMOVED;
    payload: BeyondCharacter;
}

export interface EncCustomCharacterRemovedAction {
    type: typeof ENC_CUSTOM_CHARACTER_REMOVED;
    payload: CustomCharacter;
}

export interface EncBeyondCharacterInitiativeUpdatedAction {
    type: typeof ENC_BEYOND_CHARACTER_INITIATIVE_UPDATED;
    payload: {
        character: BeyondCharacter;
        initiative: number;
    };
}

export interface EncCustomCharacterInitiativeUpdatedAction {
    type: typeof ENC_CUSTOM_CHARACTER_INITIATIVE_UPDATED;
    payload: {
        character: CustomCharacter;
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

export interface EncCustomCharacterHitPointsUpdatedAction {
    type: typeof ENC_CUSTOM_CHARACTER_HIT_POINTS_UPDATED;
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

export interface EncBeyondCharacterUpdatedByIdAction {
    type: typeof ENC_BEYOND_CHARACTER_UPDATED_BY_ID,
    payload: {
        id: number,
        character: BeyondCharacter,
    };
}

export type EncounterActionType = EncBeyondCharacterAddedAction |
    EncCustomCharacterAddedAction |
    EncBeyondCharacterRemovedAction |
    EncCustomCharacterRemovedAction |
    EncBeyondCharacterInitiativeUpdatedAction |
    EncCustomCharacterInitiativeUpdatedAction |
    EncResetAction |
    EncCreatedAction |
    EncNextTurnAction |
    EncPrevTurnAction |
    EncEntitySelectedAction |
    EncCustomCharacterHitPointsUpdatedAction |
    EncTextNotesUpdateAction |
    EncImgNotesUpdatedAction |
    EncEntityConcentrationUpdatedAction |
    EncBeyondCharacterUpdatedByIdAction;
