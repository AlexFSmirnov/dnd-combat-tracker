import React, { useState, useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { useMediaQuery } from '@material-ui/core';
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
    short?: boolean;
}

const EntityList: React.FC<EntityListProps & StateProps> = ({ encounter, fullScreen, short }) => {
    const entitiesByInitiative: EntityWithInitiative[] = useMemo(() => sortEntitiesWithInitiative(encounter), [encounter]);

    return (
        <EntityListContainer fullScreen={fullScreen} short={short}>
            <EntityListWrapper fullScreen={fullScreen}>
                {entitiesByInitiative.map(({ type, entity, key })=> {
                    let entityListItemProps = { key, entityKey: key, type, ...entity };

                    if (type === EntityType.NPC) {
                        entityListItemProps = {
                            ...entityListItemProps,
                            removedHitPoints: (encounter && encounter.npcHitPoints[key] && encounter.npcHitPoints[key].removedHitPoints) || 0,
                            temporaryHitPoints: (encounter && encounter.npcHitPoints[key] && encounter.npcHitPoints[key].temporaryHitPoints) || 0,
                        };
                    }

                    const color = ((entity as Character).themeColor && (entity as Character).themeColor?.themeColor) || undefined;
                    return <EntityListItem {...entityListItemProps} color={color} />;
                })}
            </EntityListWrapper>
            <EntityListTopFade />
            <EntityListBottomFade />
            <FancyFrame forceUpdateProp={short} />
        </EntityListContainer>
    );
};

const mapStateToProps = (state: State): StateProps => ({
    encounter: state.encounter || null,
});

export default connect<StateProps>(mapStateToProps)(EntityList);
