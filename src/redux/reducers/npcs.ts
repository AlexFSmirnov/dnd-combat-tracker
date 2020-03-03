import { NPC } from '../types';
import {
    NPC_ADDED,
    NPC_DELETED,
    NPC_UPDATED,
    NPCActionType,
    NPCDeletedActionType,
    NPCUpdatedActionType,
} from '../actions/npcs';

export type NPCState = NPC[];

const initialState: NPCState = [];

const deleteNPC = (state: NPCState, action: NPCDeletedActionType) => {
    const { payload: npc } = action;
    const index = state.indexOf(npc);
    if (index !== -1) {
        return [...state.slice(0, index), ...state.slice(index + 1)];
    }
    return [...state];
};

const updateNPC = (state: NPCState, action: NPCUpdatedActionType) => {
    const { payload: { originalNPC, updatedNPC } } = action;
    const index = state.indexOf(originalNPC);
    if (index !== -1) {
        return [...state.slice(0, index), updatedNPC, ...state.slice(index + 1)];
    }
    return [...state];
};

export const npcs = (state = initialState, action: NPCActionType) => {
    switch (action.type) {
    case NPC_ADDED:
        return [...state, action.payload];

    case NPC_DELETED:
        return deleteNPC(state, action);

    case NPC_UPDATED:
        return updateNPC(state, action);

    default:
        return state;
    }
};
