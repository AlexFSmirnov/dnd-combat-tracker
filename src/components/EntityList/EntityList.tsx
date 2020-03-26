import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { keys } from 'lodash/fp';
import { State, Character, NPC } from '../../redux/types';
import { FancyFrame } from '../Frame';
import { EntityListItem, EntityType } from '../EntityListItem';
import { EntityListContainer, EntityListWrapper, EntityListBottomFade, EntityListTopFade } from './style';
import { EncounterState } from '../../redux/reducers/encounter';

interface StateProps {
    encounter: EncounterState | null;
}

export interface EntityListProps {
    fullScreen?: boolean;
}

type EntitiesWithInitiative = Array<{ initiative: number; type: EntityType; entity: Character | NPC, key: number }>;

const EntityList: React.FC<EntityListProps & StateProps> = ({ encounter, fullScreen }) => {
    const entitiesByInitiative: EntitiesWithInitiative = useMemo(() => {
        let result: EntitiesWithInitiative = [];

        if (!encounter) {
            return result;
        }

        const { characters, npcs, initiativeById } = encounter;

        keys(characters).forEach(keyString => {
            const key = parseInt(keyString);
            const initiative = initiativeById[key];
            result.push({
                initiative,
                type: EntityType.CHARACTER,
                entity: characters[key],
                key,
            });
        });

        keys(npcs).forEach(keyString => {
            const key = parseInt(keyString);
            const initiative = initiativeById[key];
            result.push({
                initiative,
                type: EntityType.NPC,
                entity: npcs[key],
                key,
            });
        });

        return result.sort((e1, e2) => {
            if (e1.initiative < e2.initiative) {
                return 1;
            } else if (e1.initiative > e2.initiative) {
                return -1;
            }

            return 0;
        });
    }, [encounter]);

    return (
        <EntityListContainer fullScreen={fullScreen}>
            <EntityListWrapper fullScreen={fullScreen}>
                {entitiesByInitiative.map(({ initiative, type, entity, key })=> {
                    let entityListItemProps = { key, type, ...entity };

                    if (type === EntityType.NPC) {
                        const removedHitPoints = 1;
                        const temporaryHitPoints = 10;

                        entityListItemProps = {
                            ...entityListItemProps,
                            removedHitPoints,
                            temporaryHitPoints,
                        };
                    }

                    return <EntityListItem {...entityListItemProps} />;
                })}
            </EntityListWrapper>
            <EntityListTopFade />
            <EntityListBottomFade />
            <FancyFrame />
        </EntityListContainer>
    );
};

const mapStateToProps = (state: State): StateProps => ({
    encounter: state.encounter || null,
});

export default connect<StateProps>(mapStateToProps)(EntityList);
