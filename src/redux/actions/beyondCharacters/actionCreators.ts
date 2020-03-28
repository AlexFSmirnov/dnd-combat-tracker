import { Dispatch } from 'redux';
import { getBeyondCharacterStats } from '../../../helpers/dnd-beyond';
import { getRequestErrorMessage } from '../../../helpers/getRequestErrorMessage';
import { State, BeyondCharacter } from '../../types';
import { openErrorDialog } from '../ui';
import { updateEncounterBeyondCharacterById } from '../encounter';
import {
    BEYOND_CHARACTER_ADDED,
    BEYOND_CHARACTER_UPDATED,
    BEYOND_CHARACTER_MAX_HP_UPDATED,
    BEYOND_CHARACTER_FETCH_FAILED,
    BEYOND_CHARACTER_ALREADY_EXISTS,
    BEYOND_CHARACTER_DELETED,
} from './types';

export const addBeyondCharacterByUrl = (url: string, maxHitPoints: number) => (dispatch: Dispatch<any>, getState: () => State) => {
    const characterId = url.split('/')[url.split('/').length - 1];
    const { beyondCharacters } = getState();
    if (beyondCharacters && beyondCharacters.every(c => c.id.toString() !== characterId)) {
        getBeyondCharacterStats({ characterId }).then(
            stats => {
                // "stats" contains much more data, we're destructuring only what whe need to create a character.
                const { id, name, removedHitPoints, temporaryHitPoints, deathSaves, avatarUrl, themeColor, defaultBackdrop } = stats;
                const character: BeyondCharacter = { id, name, maxHitPoints, removedHitPoints, temporaryHitPoints, deathSaves, avatarUrl, themeColor, defaultBackdrop };
                dispatch(addBeyondCharacter(character));
            },
            (error) => dispatch(openErrorDialog(getRequestErrorMessage(error))),
        );
    } else {
        dispatch(updateBeyondCharacterById(parseInt(characterId), maxHitPoints));
    }
};

export const updateBeyondCharacterById = (id: number, maxHitPoints: number) => (dispatch: Dispatch<any>, getState: () => State) => {
    const { beyondCharacters } = getState();
    if (beyondCharacters) {
        const character = beyondCharacters.find(c => c.id === id);
        if (character) {
            getBeyondCharacterStats({ characterId: id.toString() }).then(
                stats => {
                    // "stats" contains much more data, we're destructuring only what whe need to create a character.
                    const { id, name, removedHitPoints, temporaryHitPoints, deathSaves, avatarUrl, themeColor, defaultBackdrop } = stats;
                    const updatedBeyondCharacter: BeyondCharacter = { id, name, maxHitPoints, removedHitPoints, temporaryHitPoints, deathSaves, avatarUrl, themeColor, defaultBackdrop, };
                    dispatch(updateBeyondCharacter(id, updatedBeyondCharacter));
                    dispatch(updateEncounterBeyondCharacterById(id, updatedBeyondCharacter));
                },
                (error) => dispatch(openErrorDialog(getRequestErrorMessage(error))),
            );
        } else {
            dispatch(addBeyondCharacterByUrl(id.toString(), maxHitPoints));
        }
    }
};

export const addBeyondCharacter = (character: BeyondCharacter) => ({
    type: BEYOND_CHARACTER_ADDED,
    payload: character,
});

export const updateBeyondCharacter = (id: number, character: BeyondCharacter) => ({
    type: BEYOND_CHARACTER_UPDATED,
    payload: { id, character },
});

export const updateBeyondCharacterMaxHp = (id: number, maxHp: number) => ({
    type: BEYOND_CHARACTER_MAX_HP_UPDATED,
    payload: { id, maxHp },
}); 

export const deleteBeyondCharacter = (id: number) => ({
    type: BEYOND_CHARACTER_DELETED,
    payload: { id },
});

export const characterFetchFailed = (error: string) => ({
    type: BEYOND_CHARACTER_FETCH_FAILED,
    error,
});

export const characterAlreadyExists = () => ({
    type: BEYOND_CHARACTER_ALREADY_EXISTS,
});
