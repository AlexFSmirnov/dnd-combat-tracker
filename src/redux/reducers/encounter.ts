import { omit, findKey, filter, reduce, keys } from 'lodash/fp';
import { Character, NPC } from '../types';
import {
    ENC_CHARACTER_ADDED,
    ENC_NPC_ADDED,
    ENC_CHARACTER_REMOVED,
    ENC_NPC_REMOVED,
    ENC_CHARACTER_INITIATIVE_UPDATED,
    ENC_NPC_INITIATIVE_UPDATED,
    ENC_RESET,
    EncCharacterAddedAction,
    EncNPCAddedAction,
    EncCharacterRemovedAction,
    EncNPCRemovedAction,
    EncCharacterInitiativeUpdatedAction,
    EncNPCInitiativeUpdatedAction,
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

const removeCharacter = (state: EncounterState, action: EncCharacterRemovedAction) => {
    const characterKey = findKey((c: Character) => c.id === action.payload.id, state.characters);
    if (!characterKey) {
        return state;
    }

    return {
        ...state,
        characters: omit(characterKey, state.characters),
        initiativeById: omit(characterKey, state.initiativeById),
    };
};

const removeNPC = (state: EncounterState, action: EncNPCRemovedAction) => {
    const { npcs } = state;
    const { name } = action.payload;
    const addedNPCsKeys = filter(key => npcs[parseInt(key)].name.startsWith(name), keys(npcs));

    if (addedNPCsKeys.length === 0) {
        return state;
    }

    const latestAddedNpc = reduce(
        (accumulator, keyString) => {
            const key = parseInt(keyString);
            const npc = npcs[key];

            if (npc.name === name) {
                if (accumulator.number < 1) {
                    return { key, number: 1 };
                }
                return accumulator;
            }

            const splitByHash = npc.name.slice(name.length).split('#');
            const number = parseInt(splitByHash[splitByHash.length - 1]);

            if (number > accumulator.number) {
                return { key, number };
            }

            return accumulator;
        },
        {
            key: 0,
            number: -1,
        },
        addedNPCsKeys,
    );

    return {
        ...state,
        npcs: omit(latestAddedNpc.key, npcs),
    };
};

const updateCharacterInitiative = (state: EncounterState, action: EncCharacterInitiativeUpdatedAction) => {
    const { characters, initiativeById } = state;
    const { character, initiative } = action.payload;

    const characterKey = keys(characters).find(key => characters[parseInt(key)].id === character.id);
    if (!characterKey) {
        return state;
    }

    return {
        ...state,
        initiativeById: {
            ...initiativeById,
            [characterKey]: initiative,
        },
    };
};

const updateNPCInitiative = (state: EncounterState, action: EncNPCInitiativeUpdatedAction) => {
    const { npcs, initiativeById } = state;
    const { npc, initiative } = action.payload;

    const npcKeys = keys(npcs).filter(key => npcs[parseInt(key)].name.startsWith(npc.name));
    if (npcKeys.length === 0) {
        return state;
    }

    let npcInitiatives: Record<number, number> = {};
    npcKeys.forEach(key => (npcInitiatives[parseInt(key)] = initiative));

    return {
        ...state,
        initiativeById: {
            ...initiativeById,
            ...npcInitiatives,
        },
    };
};

export const encounter = (state = initialState, action: EncounterActionType) => {
    switch (action.type) {
    case ENC_CHARACTER_ADDED:
        return addCharacter(state, action);

    case ENC_NPC_ADDED:
        return addNPC(state, action);

    case ENC_CHARACTER_REMOVED:
        return removeCharacter(state, action);

    case ENC_NPC_REMOVED:
        return removeNPC(state, action);

    case ENC_CHARACTER_INITIATIVE_UPDATED:
        return updateCharacterInitiative(state, action);
    
    case ENC_NPC_INITIATIVE_UPDATED:
        return updateNPCInitiative(state, action);

    case ENC_RESET:
        return initialState;

    default:
        return state;
    }
};
