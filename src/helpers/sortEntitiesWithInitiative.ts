import { keys } from 'lodash/fp';
import { EncounterState } from '../redux/reducers/encounter';
import { Character, NPC } from '../redux/types';
import { EntityType } from '../components/EntityListItem';

export interface EntityWithInitiative {
    initiative: number;
    type: EntityType;
    entity: Character | NPC;
    key: number;
}

export const sortEntitiesWithInitiative = (encounter: EncounterState | null) => {
    if (!encounter) {
        return [];
    }

    const { characters, npcs, initiativeById, currentTurnKey } = encounter;

    let sortedByInitiative: EntityWithInitiative[] = [];

    keys(characters).forEach(keyString => {
        const key = parseInt(keyString);
        const initiative = initiativeById[key];
        if (initiative) {
            sortedByInitiative.push({
                initiative,
                type: EntityType.CHARACTER,
                entity: characters[key],
                key,
            });
        }
    });

    keys(npcs).forEach(keyString => {
        const key = parseInt(keyString);
        const initiative = initiativeById[key];
        if (initiative) {
            sortedByInitiative.push({
                initiative,
                type: EntityType.NPC,
                entity: npcs[key],
                key,
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

    while (sortedByInitiative[0].key !== currentTurnKey) {
        sortedByInitiative.push(sortedByInitiative.shift() as EntityWithInitiative);
    }

    return sortedByInitiative;
};
