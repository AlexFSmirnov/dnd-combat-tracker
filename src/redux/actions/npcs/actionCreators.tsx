import React from 'react';
import { Dispatch } from 'redux';
import { NPC, State } from '../../types';
import { openErrorDialog } from '../ui';
import {
    NPC_ADDED,
    NPC_DELETED,
    NPC_UPDATED,
} from './types';

export const addNPCSafe = (npc: NPC) => (dispatch: Dispatch<any>, getState: () => State) => {
    const { npcs } = getState();
    if (npcs && npcs.find(n => n.name === npc.name)) {
        dispatch(openErrorDialog(<>NPC with this name already exists.</>));
    } else {
        dispatch(addNPC(npc));
    }
};

export const addNPC = (npc: NPC) => ({
    type: NPC_ADDED,
    payload: npc,
});

export const deleteNPC = (npc: NPC) => ({
    type: NPC_DELETED,
    payload: npc,
});

export interface UpdateNPCProps {
    originalNPC: NPC;
    updatedNPC: NPC;
}

export const updateNPCSafe = (props: UpdateNPCProps) => (dispatch: Dispatch<any>, getState: () => State) => {
    const { npcs } = getState();
    if (npcs && npcs.find(n => n.name === props.updatedNPC.name)) {
        dispatch(openErrorDialog(<>NPC with this name already exists.</>));
    } else {
        dispatch(updateNPC(props));
    }
};

export const updateNPC = (props: UpdateNPCProps) => ({
    type: NPC_UPDATED,
    payload: props,
});
