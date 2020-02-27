import { Dispatch } from 'redux';
import { getCharacterStats } from '../../helpers/dnd-beyond';
import { State, Character } from '../types';
import { CHARACTER_ADDED, CHARACTER_UPDATED, CHARACTER_FETCH_FAILED, CHARACTER_ALREADY_EXISTS } from './types';

export const addCharacterByUrl = (url: string, maxHitPoints: number) => (dispatch: Dispatch<any>, getState: () => State) => {
    const characterId = url.split('/')[url.split('/').length - 1];
    const { characters } = getState();
    if (characters && characters.every(c => c.id.toString() !== characterId)) {
        getCharacterStats({ characterId }).then(
            stats => {
                const { id, name, removedHitPoints, temporaryHitPoints, deathSaves, avatarUrl, themeColor, defaultBackdrop } = stats;
                const character: Character = { id, name, maxHitPoints, removedHitPoints, temporaryHitPoints, deathSaves, avatarUrl, themeColor, defaultBackdrop, };
                dispatch(addCharacter(character));
            },
            (error) => dispatch(characterFetchFailed(error.message)),
        );
    } else {
        dispatch(updateCharacterById(parseInt(characterId), maxHitPoints));
    }
};

export const updateCharacterById = (id: number, maxHitPoints: number) => (dispatch: Dispatch<any>, getState: () => State) => {
    const { characters } = getState();
    if (characters) {
        const character = characters.find(c => c.id === id);
        if (character) {
            getCharacterStats({ characterId: id.toString() }).then(
                stats => {
                    const { id, name, removedHitPoints, temporaryHitPoints, deathSaves, avatarUrl, themeColor, defaultBackdrop } = stats;
                    const updatedCharacter: Character = { id, name, maxHitPoints, removedHitPoints, temporaryHitPoints, deathSaves, avatarUrl, themeColor, defaultBackdrop, };
                    dispatch(updateCharacter(id, updatedCharacter));
                },
                (error) => dispatch(characterFetchFailed(error.message)),
            );
        } else {
            dispatch(addCharacterByUrl(id.toString(), maxHitPoints));
        }
    }
};

export const addCharacter = (character: Character) => ({
    type: CHARACTER_ADDED,
    payload: character,
});

export const updateCharacter = (id: number, character: Character) => ({
    type: CHARACTER_UPDATED,
    payload: { id, character },
});

export const characterFetchFailed = (error: string) => ({
    type: CHARACTER_FETCH_FAILED,
    error,
});

export const characterAlreadyExists = () => ({
    type: CHARACTER_ALREADY_EXISTS,
});
