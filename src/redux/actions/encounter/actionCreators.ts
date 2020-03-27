import { Character, NPC } from '../../types';
import { ENC_CHARACTER_ADDED, ENC_NPC_ADDED, ENC_CHARACTER_REMOVED, ENC_NPC_REMOVED, ENC_RESET, ENC_CHARACTER_INITIATIVE_UPDATED, ENC_NPC_INITIATIVE_UPDATED, ENC_CREATED, ENC_NEXT_TURN, ENC_PREV_TURN, ENC_ENTITY_SELECTED, ENC_NPC_HIT_POINTS_UPDATED, ENC_TEXT_NOTES_UPDATED, ENC_IMG_NOTES_UPDATED } from './types';

export const addCharacterToEncounter = (character: Character) => ({
    type: ENC_CHARACTER_ADDED,
    payload: character,
});

export const addNPCToEncounter = (npc: NPC) => ({
    type: ENC_NPC_ADDED,
    payload: npc,
});

export const removeCharacterFromEncounter = (character: Character) => ({
    type: ENC_CHARACTER_REMOVED,
    payload: character,
});

export const removeNPCFromEncounter = (npc: NPC) => ({
    type: ENC_NPC_REMOVED,
    payload: npc,
});

export const updateCharacterInitiative = (character: Character, initiative: number) => ({
    type: ENC_CHARACTER_INITIATIVE_UPDATED,
    payload: { character, initiative },
});

export const updateNPCInitiative = (npc: NPC, initiative: number) => ({
    type: ENC_NPC_INITIATIVE_UPDATED,
    payload: { npc, initiative },
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

export const updateNPCHitPoints = (key: number, update: number, temp = 0) => ({
    type: ENC_NPC_HIT_POINTS_UPDATED,
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
