import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { useTheme } from '@material-ui/core';
import { State, BeyondCharacter } from '../../redux/types';
import { EncounterState } from '../../redux/reducers/encounter';
import { sortEntitiesWithInitiative, EntityWithInitiative } from '../../helpers/sortEntitiesWithInitiative';
import { FancyFrame } from '../Frame';
import { EntityListItem, EntityType } from '../EntityListItem';
import { EntityListContainer, EntityListWrapper, EntityListBottomFade, EntityListTopFade, Divider } from './style';

interface StateProps {
    encounter: EncounterState | null;
}

export interface EntityListProps {
    fullWidth?: boolean;
    fullScreen?: boolean;
    short?: boolean;
}

const EntityList: React.FC<EntityListProps & StateProps> = ({ encounter, fullWidth, fullScreen, short }) => {
    const theme = useTheme();
    const entitiesByInitiative: EntityWithInitiative[] = useMemo(() => sortEntitiesWithInitiative(encounter), [encounter]);
    const dividerIndex = useMemo(() => entitiesByInitiative.findIndex(e => e.dividerAfterThisOne), [entitiesByInitiative]);

    return (
        <EntityListContainer fullWidth={fullWidth} fullScreen={fullScreen} short={short}>
            <EntityListWrapper>
                {entitiesByInitiative.map(({ type, entity, key, dividerAfterThisOne, isCurrentlyFirst }, index)=> {
                    let entityListItemProps = { key, entityKey: key, type, isInCurrentTurn: index <= dividerIndex, isCurrentlyFirst, ...entity };

                    if (type === EntityType.CustomCharacter) {
                        entityListItemProps = {
                            ...entityListItemProps,
                            removedHitPoints: (encounter && encounter.customCharacterHitPoints[key] && encounter.customCharacterHitPoints[key].removedHitPoints) || 0,
                            temporaryHitPoints: (encounter && encounter.customCharacterHitPoints[key] && encounter.customCharacterHitPoints[key].temporaryHitPoints) || 0,
                        };
                    }

                    const color = ((entity as BeyondCharacter).themeColor && (entity as BeyondCharacter).themeColor?.themeColor) || theme.palette.primary.main;

                    return (
                        <React.Fragment key={key}>
                            <EntityListItem {...entityListItemProps} color={type === EntityType.BeyondCharacter ? color : theme.palette.secondary.main} />
                            {dividerAfterThisOne ? <Divider color={theme.palette.secondary.main} key={`${key}-div`} /> : null}
                        </React.Fragment>
                    );
                })}
            </EntityListWrapper>
            <EntityListBottomFade />
            <FancyFrame forceUpdateProp={`${short}${fullWidth}${fullScreen}`} />
        </EntityListContainer>
    );
};

const mapStateToProps = (state: State): StateProps => ({
    encounter: state.encounter || null,
});

export default connect<StateProps>(mapStateToProps)(EntityList);
