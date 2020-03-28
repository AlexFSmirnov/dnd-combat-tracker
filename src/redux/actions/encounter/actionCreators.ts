import { BeyondCharacter, CustomCharacter } from '../../types';
import {
    ENC_BEYOND_CHARACTER_ADDED,
    ENC_CUSTOM_CHARACTER_ADDED,
    ENC_BEYOND_CHARACTER_REMOVED,
    ENC_CUSTOM_CHARACTER_REMOVED,
    ENC_RESET,
    ENC_BEYOND_CHARACTER_INITIATIVE_UPDATED,
    ENC_CUSTOM_CHARACTER_INITIATIVE_UPDATED,
    ENC_CREATED,
    ENC_NEXT_TURN,
    ENC_PREV_TURN,
    ENC_ENTITY_SELECTED,
    ENC_CUSTOM_CHARACTER_HIT_POINTS_UPDATED,
    ENC_TEXT_NOTES_UPDATED,
    ENC_IMG_NOTES_UPDATED,
    ENC_ENTITY_CONCENTRATION_UPDATED,
    ENC_BEYOND_CHARACTER_UPDATED_BY_ID,
} from './types';

export const addBeyondCharacterToEncounter = (character: BeyondCharacter) => ({
    type: ENC_BEYOND_CHARACTER_ADDED,
    payload: character,
});

export const addCustomCharacterToEncounter = (character: CustomCharacter) => ({
    type: ENC_CUSTOM_CHARACTER_ADDED,
    payload: character,
});

export const removeBeyondCharacterFromEncounter = (character: BeyondCharacter) => ({
    type: ENC_BEYOND_CHARACTER_REMOVED,
    payload: character,
});

export const removeCustomCharacterFromEncounter = (character: CustomCharacter) => ({
    type: ENC_CUSTOM_CHARACTER_REMOVED,
    payload: character,
});

export const updateBeyondCharacterInitiative = (character: BeyondCharacter, initiative: number) => ({
    type: ENC_BEYOND_CHARACTER_INITIATIVE_UPDATED,
    payload: { character, initiative },
});

export const updateCustomCharacterInitiative = (character: CustomCharacter, initiative: number) => ({
    type: ENC_CUSTOM_CHARACTER_INITIATIVE_UPDATED,
    payload: { character, initiative },
});

export const resetEncounter = () => ({
    type: ENC_RESET,
});

export const createEncounter = () => ({
    type: ENC_CREATED,
});

export const nextTurn = () => ({
    type: ENC_NEXT_TURN,
});

export const prevTurn = () => ({
    type: ENC_PREV_TURN,
});

export const selectEntity = (key: number | null) => ({
    type: ENC_ENTITY_SELECTED,
    payload: { key },
});

export const updateCustomCharacterHitPoints = (key: number, update: number, temp = 0) => ({
    type: ENC_CUSTOM_CHARACTER_HIT_POINTS_UPDATED,
    payload: { key, update, temp },
});

export const updateTextNotes = (key: number, text: string) => ({
    type: ENC_TEXT_NOTES_UPDATED,
    payload: { key, text },
});

export const updateImgNotes = (key: number, img: string) => ({
    type: ENC_IMG_NOTES_UPDATED,
    payload: { key, img },
});

export const updateEntityConcentration = (key: number, since: number | null) => ({
    type: ENC_ENTITY_CONCENTRATION_UPDATED,
    payload: { key, since },
});

export const updateEncounterBeyondCharacterById = (id: number, character: BeyondCharacter) => ({
    type: ENC_BEYOND_CHARACTER_UPDATED_BY_ID,
    payload: { id, character },
});
