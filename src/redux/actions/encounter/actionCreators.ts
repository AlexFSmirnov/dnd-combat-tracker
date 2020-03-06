import { Character, NPC } from '../../types';
import { ENC_CHARACTER_ADDED, ENC_NPC_ADDED } from './types';

export const addCharacterToEncounter = (character: Character) => ({
    type: ENC_CHARACTER_ADDED,
    payload: character,
});

export const addNPCToEncounter = (npc: NPC) => ({
    type: ENC_NPC_ADDED,
    payload: npc,
});
