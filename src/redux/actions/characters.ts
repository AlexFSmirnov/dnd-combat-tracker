import { Dispatch } from 'redux';
import { getCharacterStats } from '../../helpers/dnd-beyond';
import { Store, Character } from '../types';
import { CHARACTER_ADDED, CHARACTER_FETCH_FAILED, CHARACTER_ALREADY_EXISTS } from './types';

export const addCharacterByUrl = (url: string, maxHitPoints: number) => (dispatch: Dispatch, getState: () => Store) => {
    const characterId = url.split('/')[url.split('/').length - 1];
    if (getState().characters.every(c => c.id.toString() !== characterId)) {
        getCharacterStats({ characterId }).then(
            stats => {
                const { id, name, removedHitPoints, temporaryHitPoints, deathSaves, avatarUrl, themeColor, defaultBackdrop } = stats;
                const character: Character = {
                    id,
                    name,
                    maxHitPoints,
                    removedHitPoints,
                    temporaryHitPoints,
                    deathSaves,
                    avatarUrl,
                    themeColor,
                    defaultBackdrop,
                };
                dispatch(addCharacter(character));
            },
            (error) => dispatch(characterFetchFailed(error.message)),
        );
    } else {
        dispatch(characterAlreadyExists());
    }
};

export const addCharacter = (character: Character) => ({
    type: CHARACTER_ADDED,
    payload: character,
});

export const characterFetchFailed = (error: string) => ({
    type: CHARACTER_FETCH_FAILED,
    error,
});

export const characterAlreadyExists = () => ({
    type: CHARACTER_ALREADY_EXISTS,
});
