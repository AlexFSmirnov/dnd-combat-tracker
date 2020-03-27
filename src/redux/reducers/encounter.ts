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
    ENC_CREATED,
    ENC_NEXT_TURN,
    ENC_PREV_TURN,
    ENC_ENTITY_SELECTED,
    ENC_NPC_HIT_POINTS_UPDATED,
    ENC_TEXT_NOTES_UPDATED,
    ENC_IMG_NOTES_UPDATED,
    ENC_ENTITY_CONCENTRATION_UPDATED,
    EncCharacterAddedAction,
    EncNPCAddedAction,
    EncCharacterRemovedAction,
    EncNPCRemovedAction,
    EncCharacterInitiativeUpdatedAction,
    EncNPCInitiativeUpdatedAction,
    EncNPCHitPointsUpdatedAction,
    EncEntityConcentrationUpdatedAction,
    EncounterActionType,
} from '../actions/encounter/types';
import { sortEntitiesWithInitiative } from '../../helpers/sortEntitiesWithInitiative';

const INIT_INITIATIVE = 1000000;

export interface EncounterState {
    characters: Record<number, Character>;
    npcs: Record<number, NPC>;
    initiativeById: Record<number, number>;
    currentId: number;
    currentTurnInitiative: number;
    currentTurnKey: number;
    currentRound: number;
    selectedEntityKey: number | null;
    npcHitPoints: Record<number, {
        removedHitPoints: number;
        temporaryHitPoints: number;
    }>;
    textNotesByKey: Record<number, string>;
    imgNotesByKey: Record<number, string>;
    concentrationByKey: Record<number, number>;
}

const initialState: EncounterState = {
    characters: {},
    npcs: {},
    initiativeById: {},
    currentId: 1,
    currentTurnInitiative: INIT_INITIATIVE,
    currentTurnKey: 0,
    currentRound: 1,
    selectedEntityKey: null,
    npcHitPoints: {},
    textNotesByKey: {},
    imgNotesByKey: {},
    concentrationByKey: {},
};

const addCharacter = (state: EncounterState, action: EncCharacterAddedAction) => {
    const { characters } = state;
    const { payload: { name } } = action;

    const characterNumber = filter(key => characters[parseInt(key)].name.startsWith(name), keys(characters)).length;

    if (characterNumber === 0) {
        return {
            ...state,
            characters: { ...state.characters, [state.currentId]: action.payload },
            currentId: state.currentId + 1,
            textNotesByKey: { ...state.textNotesByKey, [state.currentId]: `Notes for ${name} \n` }
        };
    } else {
        return {
            ...state,
            characters: { ...state.characters, [state.currentId]: {
                ...action.payload,
                name: `${name} #${characterNumber + 1}`,
                textNotesByKey: { ...state.textNotesByKey, [state.currentId]: `Notes for ${name} #${characterNumber + 1} \n` }
            }},
            currentId: state.currentId + 1,
        };
    }
};

const addNPC = (state: EncounterState, action: EncNPCAddedAction) => {
    const { npcs } = state;
    const { payload: { name } } = action;

    const npcNumber = filter(key => npcs[parseInt(key)].name.startsWith(name), keys(npcs)).length;

    if (npcNumber === 0) {
        return {
            ...state,
            npcs: { ...state.npcs, [state.currentId]: action.payload },
            currentId: state.currentId + 1,
            npcHitPoints: { ...state.npcHitPoints, [state.currentId]: { removedHitPoints: 0, temporaryHitPoints: 0 } },
            textNotesByKey: { ...state.textNotesByKey, [state.currentId]: `Notes for ${name} \n` }
        };
    } else {
        return {
            ...state,
            npcs: { ...state.npcs, [state.currentId]: {
                ...action.payload,
                name: `${name} #${npcNumber + 1}`,
            }},
            currentId: state.currentId + 1,
            npcHitPoints: { ...state.npcHitPoints, [state.currentId]: { removedHitPoints: 0, temporaryHitPoints: 0 } },
            textNotesByKey: { ...state.textNotesByKey, [state.currentId]: `Notes for ${name} #${npcNumber + 1} \n` }
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
        characters: (omit(characterKey, state.characters) || {}) as Record<number, Character>,
        initiativeById: (omit(characterKey, state.initiativeById) || {}) as Record<number, number>,
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
        npcs: omit(latestAddedNpc.key, npcs) || {},
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

const recalculateCurrentTurnKey = (state: EncounterState): EncounterState => {
    const { currentTurnInitiative, characters, npcs, initiativeById } = state;
    if (currentTurnInitiative === INIT_INITIATIVE) {
        const findMaxInitiative = (maxInitiative: { key: number, initiative: number}, keyString: string) => {
            const key = parseInt(keyString);
            const initiative = initiativeById[key];
            if (initiative && initiative > maxInitiative.initiative) {
                return { key, initiative };
            }

            return maxInitiative;
        };
        const { key: characterKey, initiative: characterInitiative } = reduce(findMaxInitiative, { key: -1, initiative: -100 }, keys(characters));
        const { key: npcKey, initiative: npcInitiative } = reduce(findMaxInitiative, { key: -1, initiative: -100 }, keys(npcs));

        if (npcInitiative === -100 && characterInitiative === -100) {
            return state;
        }

        return {
            ...state,
            currentTurnInitiative: Math.max(characterInitiative, npcInitiative),
            currentTurnKey: characterInitiative > npcInitiative ? characterKey : npcKey,
        };
    } else {
        const findWithInitiative = (keyString: string) => {
            const key = parseInt(keyString);
            const initiative = initiativeById[key];
            if (initiative && initiative === currentTurnInitiative) {
                return true;
            }
            return false;
        };

        const keyWithInitiative = parseInt(keys(characters).find(findWithInitiative) as string) || parseInt(keys(npcs).find(findWithInitiative) as string);
        if (!isNaN(keyWithInitiative)) {
            return {
                ...state,
                currentTurnKey: keyWithInitiative,
            };
        }

        return recalculateCurrentTurnKey({
            ...state,
            currentTurnInitiative: INIT_INITIATIVE,
        });
    }
};

const nextTurn = (state: EncounterState): EncounterState => {
    const sortedEntities = sortEntitiesWithInitiative(state);
    if (sortedEntities.length < 2) {
        return {
            ...state,
            selectedEntityKey: null,
            currentRound: state.currentRound + 1,
        };
    }

    const { initiative, key } = sortedEntities[1];
    let round = state.currentRound;
    if (initiative > sortedEntities[0].initiative) {
        round += 1;
    }

    return {
        ...state,
        selectedEntityKey: null,
        currentTurnInitiative: initiative,
        currentTurnKey: key,
        currentRound: round,
    };
};

const prevTurn = (state: EncounterState): EncounterState => {
    const sortedEntities = sortEntitiesWithInitiative(state);
    if (sortedEntities.length < 2) {
        return {
            ...state,
            selectedEntityKey: null,
            currentRound: state.currentRound - 1,
        };
    }

    const { initiative, key } = sortedEntities[sortedEntities.length - 1];
    let round = state.currentRound;
    if (initiative < sortedEntities[0].initiative) {
        round -= 1;
    }

    return {
        ...state,
        selectedEntityKey: null,
        currentTurnInitiative: initiative,
        currentTurnKey: key,
        currentRound: round,
    };
};

const updateNPCHitPoints = (state: EncounterState, action: EncNPCHitPointsUpdatedAction) => {
    const { key, update, temp } = action.payload;
    const { removedHitPoints, temporaryHitPoints } = state.npcHitPoints[key];

    let newTemp = temporaryHitPoints;
    if (temp) {
        newTemp = Math.max(0, temporaryHitPoints + temp);
    }
    if (update < 0) {
        newTemp = Math.max(0, temporaryHitPoints + update);
    }

    let newRemoved = removedHitPoints;
    if (update >= 0) {
        newRemoved = Math.max(0, removedHitPoints - update);
    } else {
        newRemoved = Math.max(0, removedHitPoints - update - Math.min(Math.abs(update), temporaryHitPoints));
    }

    return {
        ...state,
        selectedEntityKey: null,
        npcHitPoints: {
            ...state.npcHitPoints,
            [key]: {
                removedHitPoints: newRemoved,
                temporaryHitPoints: newTemp,
            },
        },
    };
};

const updateEntityConcentration = (state: EncounterState, action: EncEntityConcentrationUpdatedAction) => {
    const { key, since } = action.payload;
    if (since === null) {
        return {
            ...state,
            concentrationByKey: omit(key, state.concentrationByKey),
        };
    }

    return {
        ...state,
        concentrationByKey: {
            ...state.concentrationByKey,
            [key]: since,
        },
    };
};

export const encounter = (state = initialState, action: EncounterActionType) => {
    switch (action.type) {
    case ENC_CHARACTER_ADDED:
        return recalculateCurrentTurnKey(addCharacter(state, action));

    case ENC_NPC_ADDED:
        return recalculateCurrentTurnKey(addNPC(state, action));

    case ENC_CHARACTER_REMOVED:
        return recalculateCurrentTurnKey(removeCharacter(state, action));

    case ENC_NPC_REMOVED:
        return recalculateCurrentTurnKey(removeNPC(state, action));

    case ENC_CHARACTER_INITIATIVE_UPDATED:
        return recalculateCurrentTurnKey(updateCharacterInitiative(state, action));
    
    case ENC_NPC_INITIATIVE_UPDATED:
        return recalculateCurrentTurnKey(updateNPCInitiative(state, action));

    case ENC_RESET:
        return initialState;

    case ENC_CREATED:
        return recalculateCurrentTurnKey({
            ...state,
            currentTurnInitiative: INIT_INITIATIVE,
        });
    
    case ENC_NEXT_TURN:
        return nextTurn(state);

    case ENC_PREV_TURN:
        return prevTurn(state);

    case ENC_ENTITY_SELECTED:
        return {
            ...state,
            selectedEntityKey: action.payload.key,
        };

    case ENC_NPC_HIT_POINTS_UPDATED:
        return updateNPCHitPoints(state, action);

    case ENC_TEXT_NOTES_UPDATED:
        return {
            ...state,
            textNotesByKey: {
                ...state.textNotesByKey,
                [action.payload.key]: action.payload.text,
            },
        };

    case ENC_IMG_NOTES_UPDATED:
        return {
            ...state,
            imgNotesByKey: {
                ...state.imgNotesByKey,
                [action.payload.key]: action.payload.img,
            },
        };

    case ENC_ENTITY_CONCENTRATION_UPDATED:
        return updateEntityConcentration(state, action);

    default:
        return state;
    }
};
