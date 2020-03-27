import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { State, Character } from '../../redux/types';
import { EncounterState } from '../../redux/reducers/encounter';
import { sortEntitiesWithInitiative, EntityWithInitiative } from '../../helpers/sortEntitiesWithInitiative';
import { FancyFrame } from '../Frame';
import { EntityListItem, EntityType } from '../EntityListItem';
import { EntityListContainer, EntityListWrapper, EntityListBottomFade, EntityListTopFade } from './style';

interface StateProps {
    encounter: EncounterState | null;
}

export interface EntityListProps {
    fullScreen?: boolean;
}

const EntityList: React.FC<EntityListProps & StateProps> = ({ encounter, fullScreen }) => {
    const entitiesByInitiative: EntityWithInitiative[] = useMemo(() => sortEntitiesWithInitiative(encounter), [encounter]);

    return (
        <EntityListContainer fullScreen={fullScreen}>
            <EntityListWrapper fullScreen={fullScreen}>
                {entitiesByInitiative.map(({ type, entity, key })=> {
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

                    const color = ((entity as Character).themeColor && (entity as Character).themeColor?.themeColor) || undefined;
                    return <EntityListItem {...entityListItemProps} color={color} />;
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
