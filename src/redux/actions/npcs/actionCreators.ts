import { NPC } from '../../types';
import {
    NPC_ADDED,
    NPC_DELETED,
    NPC_UPDATED,
} from './types';

export const addNPC = (npc: NPC) => ({
    type: NPC_ADDED,
    payload: npc,
});

export const deleteNPC = (npc: NPC) => ({
    type: NPC_DELETED,
    payload: npc,
});

export const updateNPC = (npc: NPC) => ({
    type: NPC_UPDATED,
    payload: npc,
});
