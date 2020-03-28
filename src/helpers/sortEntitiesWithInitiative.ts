import { keys } from 'lodash/fp';
import { EncounterState } from '../redux/reducers/encounter';
import { BeyondCharacter, CustomCharacter } from '../redux/types';
import { EntityType } from '../components/EntityListItem';

export interface EntityWithInitiative {
    initiative: number;
    type: EntityType;
    entity: BeyondCharacter | CustomCharacter;
    key: number;
    dividerAfterThisOne?: boolean;
    isCurrentlyFirst?: boolean;
}

export const sortEntitiesWithInitiative = (encounter: EncounterState | null) => {
    if (!encounter) {
        return [];
    }

    const { beyondCharacters, customCharacters, initiativeById, currentTurnKey } = encounter;

    let sortedByInitiative: EntityWithInitiative[] = [];

    keys(beyondCharacters).forEach(keyString => {
        const key = parseInt(keyString);
        const initiative = initiativeById[key];
        if (initiative) {
            sortedByInitiative.push({
                initiative,
                type: EntityType.BeyondCharacter,
                entity: beyondCharacters[key],
                key,
                dividerAfterThisOne: false,
            });
        }
    });

    keys(customCharacters).forEach(keyString => {
        const key = parseInt(keyString);
        const initiative = initiativeById[key];
        if (initiative) {
            sortedByInitiative.push({
                initiative,
                type: EntityType.CustomCharacter,
                entity: customCharacters[key],
                key,
                dividerAfterThisOne: false,
            });
        }
    });

    sortedByInitiative.sort((e1, e2) => {
        if (e1.initiative < e2.initiative) {
            return 1;
        } else if (e1.initiative > e2.initiative) {
            return -1;
        }

        return 0;
    });

    if (sortedByInitiative.length === 0) {
        return [];
    }

    sortedByInitiative[sortedByInitiative.length - 1].dividerAfterThisOne = true;

    while (sortedByInitiative[0].key !== currentTurnKey) {
        sortedByInitiative.push(sortedByInitiative.shift() as EntityWithInitiative);
    }

    sortedByInitiative[0].isCurrentlyFirst = true;

    return sortedByInitiative;
};
