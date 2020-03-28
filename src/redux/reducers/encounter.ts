import { omit, findKey, filter, reduce, keys } from 'lodash/fp';
import { BeyondCharacter, CustomCharacter } from '../types';
import {
    ENC_BEYOND_CHARACTER_ADDED,
    ENC_CUSTOM_CHARACTER_ADDED,
    ENC_BEYOND_CHARACTER_REMOVED,
    ENC_CUSTOM_CHARACTER_REMOVED,
    ENC_BEYOND_CHARACTER_INITIATIVE_UPDATED,
    ENC_CUSTOM_CHARACTER_INITIATIVE_UPDATED,
    ENC_RESET,
    ENC_CREATED,
    ENC_NEXT_TURN,
    ENC_PREV_TURN,
    ENC_ENTITY_SELECTED,
    ENC_CUSTOM_CHARACTER_HIT_POINTS_UPDATED,
    ENC_TEXT_NOTES_UPDATED,
    ENC_IMG_NOTES_UPDATED,
    ENC_ENTITY_CONCENTRATION_UPDATED,
    ENC_BEYOND_CHARACTER_UPDATED_BY_ID,
    EncBeyondCharacterAddedAction,
    EncCustomCharacterAddedAction,
    EncBeyondCharacterRemovedAction,
    EncCustomCharacterRemovedAction,
    EncBeyondCharacterInitiativeUpdatedAction,
    EncCustomCharacterInitiativeUpdatedAction,
    EncCustomCharacterHitPointsUpdatedAction,
    EncEntityConcentrationUpdatedAction,
    EncBeyondCharacterUpdatedByIdAction,
    EncounterActionType,
} from '../actions/encounter/types';
import { sortEntitiesWithInitiative } from '../../helpers/sortEntitiesWithInitiative';

const INIT_INITIATIVE = 1000000;

export interface EncounterState {
    beyondCharacters: Record<number, BeyondCharacter>;
    customCharacters: Record<number, CustomCharacter>;
    initiativeById: Record<number, number>;
    currentId: number;
    currentTurnInitiative: number;
    currentTurnKey: number;
    currentRound: number;
    selectedEntityKey: number | null;
    customCharacterHitPoints: Record<number, {
        removedHitPoints: number;
        temporaryHitPoints: number;
    }>;
    textNotesByKey: Record<number, string>;
    imgNotesByKey: Record<number, string>;
    concentrationByKey: Record<number, number>;
}

const initialState: EncounterState = {
    beyondCharacters: {},
    customCharacters: {},
    initiativeById: {},
    currentId: 1,
    currentTurnInitiative: INIT_INITIATIVE,
    currentTurnKey: 0,
    currentRound: 1,
    selectedEntityKey: null,
    customCharacterHitPoints: {},
    textNotesByKey: {},
    imgNotesByKey: {},
    concentrationByKey: {},
};

const addBeyondCharacter = (state: EncounterState, action: EncBeyondCharacterAddedAction) => {
    const { beyondCharacters } = state;
    const { payload: { name } } = action;

    const characterNumber = filter(key => beyondCharacters[parseInt(key)].name.startsWith(name), keys(beyondCharacters)).length;

    if (characterNumber === 0) {
        return {
            ...state,
            currentId: state.currentId + 1,
            beyondCharacters: { ...state.beyondCharacters, [state.currentId]: action.payload },
            textNotesByKey: { ...state.textNotesByKey, [state.currentId]: `Notes for ${name} \n` }
        };
    } else {
        return {
            ...state,
            currentId: state.currentId + 1,
            beyondCharacters: {
                ...state.beyondCharacters,
                [state.currentId]: {
                    ...action.payload,
                    name: `${name} #${characterNumber + 1}`,
                },
            },
            textNotesByKey: { ...state.textNotesByKey, [state.currentId]: `Notes for ${name} #${characterNumber + 1} \n` }
        };
    }
};

const addCustomCharacter = (state: EncounterState, action: EncCustomCharacterAddedAction) => {
    const { customCharacters } = state;
    const { payload: { name } } = action;

    const characterNumber = filter(key => customCharacters[parseInt(key)].name.startsWith(name), keys(customCharacters)).length;

    if (characterNumber === 0) {
        return {
            ...state,
            currentId: state.currentId + 1,
            customCharacters: { ...state.customCharacters, [state.currentId]: action.payload },
            customCharacterHitPoints: { ...state.customCharacterHitPoints, [state.currentId]: { removedHitPoints: 0, temporaryHitPoints: 0 } },
            textNotesByKey: { ...state.textNotesByKey, [state.currentId]: `Notes for ${name} \n` }
        };
    } else {
        return {
            ...state,
            currentId: state.currentId + 1,
            customCharacters: {
                ...state.customCharacters,
                [state.currentId]: {
                    ...action.payload,
                    name: `${name} #${characterNumber + 1}`,
                },
            },
            customCharacterHitPoints: { ...state.customCharacterHitPoints, [state.currentId]: { removedHitPoints: 0, temporaryHitPoints: 0 } },
            textNotesByKey: { ...state.textNotesByKey, [state.currentId]: `Notes for ${name} #${characterNumber + 1} \n` }
        };
    }
};

const removeBeyondCharacter = (state: EncounterState, action: EncBeyondCharacterRemovedAction) => {
    const characterKey = findKey((c: BeyondCharacter) => c.id === action.payload.id, state.beyondCharacters);
    if (!characterKey) {
        return state;
    }

    return {
        ...state,
        beyondCharacters: (omit(characterKey, state.beyondCharacters) || {}) as Record<number, BeyondCharacter>,
        initiativeById: (omit(characterKey, state.initiativeById) || {}) as Record<number, number>,
    };
};

const removeCustomCharacter = (state: EncounterState, action: EncCustomCharacterRemovedAction) => {
    const { customCharacters } = state;
    const { name } = action.payload;
    const addedCustomCharactersKeys = filter(key => customCharacters[parseInt(key)].name.startsWith(name), keys(customCharacters));

    if (addedCustomCharactersKeys.length === 0) {
        return state;
    }

    const latestAddedCharacter = reduce(
        (accumulator, keyString) => {
            const key = parseInt(keyString);
            const character = customCharacters[key];

            if (character.name === name) {
                if (accumulator.number < 1) {
                    return { key, number: 1 };
                }
                return accumulator;
            }

            const splitByHash = character.name.slice(name.length).split('#');
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
        addedCustomCharactersKeys,
    );

    return {
        ...state,
        customCharacters: omit(latestAddedCharacter.key, customCharacters) || {},
    };
};

const updateBeyondCharacterInitiative = (state: EncounterState, action: EncBeyondCharacterInitiativeUpdatedAction) => {
    const { beyondCharacters, initiativeById } = state;
    const { character, initiative } = action.payload;

    const characterKey = keys(beyondCharacters).find(key => beyondCharacters[parseInt(key)].id === character.id);
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

const updateCustomCharacterInitiative = (state: EncounterState, action: EncCustomCharacterInitiativeUpdatedAction) => {
    const { customCharacters, initiativeById } = state;
    const { character, initiative } = action.payload;

    const characterKeys = keys(customCharacters).filter(key => customCharacters[parseInt(key)].name.startsWith(character.name));
    if (characterKeys.length === 0) {
        return state;
    }

    let initiatives: Record<number, number> = {};
    characterKeys.forEach(key => (initiatives[parseInt(key)] = initiative));

    return {
        ...state,
        initiativeById: {
            ...initiativeById,
            ...initiatives,
        },
    };
};

const recalculateCurrentTurnKey = (state: EncounterState): EncounterState => {
    const { currentTurnInitiative, beyondCharacters, customCharacters, initiativeById } = state;

    if (currentTurnInitiative === INIT_INITIATIVE) {
        const findMaxInitiative = (maxInitiative: { key: number, initiative: number}, keyString: string) => {
            const key = parseInt(keyString);
            const initiative = initiativeById[key];
            if (initiative && initiative > maxInitiative.initiative) {
                return { key, initiative };
            }

            return maxInitiative;
        };

        const { key: beyondKey, initiative: beyondInitiative } = reduce(findMaxInitiative, { key: -1, initiative: -100 }, keys(beyondCharacters));
        const { key: customKey, initiative: customInitiative } = reduce(findMaxInitiative, { key: -1, initiative: -100 }, keys(customCharacters));

        if (customInitiative === -100 && beyondInitiative === -100) {
            return state;
        }

        return {
            ...state,
            currentTurnInitiative: Math.max(beyondInitiative, customInitiative),
            currentTurnKey: beyondInitiative > customInitiative ? beyondKey : customKey,
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

        const keyWithInitiative = parseInt(keys(beyondCharacters).find(findWithInitiative) as string) || parseInt(keys(customCharacters).find(findWithInitiative) as string);
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

const updateCustomCharacterHitPoints = (state: EncounterState, action: EncCustomCharacterHitPointsUpdatedAction) => {
    const { key, update, temp } = action.payload;
    const { removedHitPoints, temporaryHitPoints } = state.customCharacterHitPoints[key];

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
        customCharacterHitPoints: {
            ...state.customCharacterHitPoints,
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

const updateBeyondCharacterById = (state: EncounterState, action: EncBeyondCharacterUpdatedByIdAction) => {
    const { id, character: updatedBeyondCharacter } = action.payload;
    const { beyondCharacters } = state;
    const key = keys(beyondCharacters).find(k => beyondCharacters[parseInt(k)].id === id);

    if (!key || isNaN(parseInt(key))) {
        return state;
    }

    return {
        ...state,
        beyondCharacters: {
            ...beyondCharacters,
            [parseInt(key)]: updatedBeyondCharacter,
        },
    };
};

export const encounter = (state = initialState, action: EncounterActionType) => {
    switch (action.type) {
    case ENC_BEYOND_CHARACTER_ADDED:
        return recalculateCurrentTurnKey(addBeyondCharacter(state, action));

    case ENC_CUSTOM_CHARACTER_ADDED:
        return recalculateCurrentTurnKey(addCustomCharacter(state, action));

    case ENC_BEYOND_CHARACTER_REMOVED:
        return recalculateCurrentTurnKey(removeBeyondCharacter(state, action));

    case ENC_CUSTOM_CHARACTER_REMOVED:
        return recalculateCurrentTurnKey(removeCustomCharacter(state, action));

    case ENC_BEYOND_CHARACTER_INITIATIVE_UPDATED:
        return recalculateCurrentTurnKey(updateBeyondCharacterInitiative(state, action));
    
    case ENC_CUSTOM_CHARACTER_INITIATIVE_UPDATED:
        return recalculateCurrentTurnKey(updateCustomCharacterInitiative(state, action));

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

    case ENC_CUSTOM_CHARACTER_HIT_POINTS_UPDATED:
        return updateCustomCharacterHitPoints(state, action);

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

    case ENC_BEYOND_CHARACTER_UPDATED_BY_ID:
        return updateBeyondCharacterById(state, action);

    default:
        return state;
    }
};
