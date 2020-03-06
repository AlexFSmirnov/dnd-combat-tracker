import { Character, NPC } from '../types';
import {
    ENC_CHARACTER_ADDED,
    ENC_NPC_ADDED,
    EncCharacterAddedAction,
    EncNPCAddedAction,
    EncounterActionType,
} from '../actions/encounter/types';

export interface EncounterState {
    characters: Record<number, Character>;
    npcs: Record<number, NPC>;
    initiativeById: Record<number, NPC>;
    currentId: number;
}

const initialState: EncounterState = {
    characters: {},
    npcs: {},
    initiativeById: {},
    currentId: 0,
};

const addCharacter = (state: EncounterState, action: EncCharacterAddedAction) => {
    const { characters } = state;
    const { payload: { name } } = action;

    const characterNumber = Object.keys(characters).filter(key => characters[parseInt(key)] && characters[parseInt(key)].name.includes(name)).length;

    if (characterNumber === 0) {
        return {
            ...state,
            characters: {...state.characters, [state.currentId]: action.payload},
            currentId: state.currentId + 1,
        };
    } else {
        return {
            ...state,
            characters: {...state.characters, [state.currentId]: {
                ...action.payload,
                name: `${name} #${characterNumber + 1}`,
            }},
            currentId: state.currentId + 1,
        };
    }
};

const addNPC = (state: EncounterState, action: EncNPCAddedAction) => {
    const { npcs } = state;
    const { payload: { name } } = action;

    const npcNumber = Object.keys(npcs).filter(key => npcs[parseInt(key)] && npcs[parseInt(key)].name.includes(name)).length;

    if (npcNumber === 0) {
        return {
            ...state,
            npcs: {...state.npcs, [state.currentId]: action.payload},
            currentId: state.currentId + 1,
        };
    } else {
        return {
            ...state,
            npcs: {...state.npcs, [state.currentId]: {
                ...action.payload,
                name: `${name} #${npcNumber + 1}`,
            }},
            currentId: state.currentId + 1,
        };
    }
};

export const encounter = (state = initialState, action: EncounterActionType) => {
    switch (action.type) {
    case ENC_CHARACTER_ADDED:
        return addCharacter(state, action);

    case ENC_NPC_ADDED:
        return addNPC(state, action);

    default:
        // return initialState;
        return state;
    }
};
