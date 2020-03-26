import { Character, NPC } from '../../types';
import { ENC_CHARACTER_ADDED, ENC_NPC_ADDED, ENC_CHARACTER_REMOVED, ENC_NPC_REMOVED } from './types';

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