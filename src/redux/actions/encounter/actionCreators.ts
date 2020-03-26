import { Character, NPC } from '../../types';
import { ENC_CHARACTER_ADDED, ENC_NPC_ADDED, ENC_CHARACTER_REMOVED, ENC_NPC_REMOVED, ENC_RESET, ENC_CHARACTER_INITIATIVE_UPDATED, ENC_NPC_INITIATIVE_UPDATED } from './types';

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
