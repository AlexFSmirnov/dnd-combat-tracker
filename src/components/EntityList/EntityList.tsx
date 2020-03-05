import React from 'react';
import { connect } from 'react-redux';
import { State, Character, NPC } from '../../redux/types';
import { FancyFrame } from '../Frame';
import { EntityListItem, EntityType } from '../EntityListItem';
import { EntityListContainer, EntityListWrapper, EntityListBottomFade, EntityListTopFade } from './style';

interface StateProps {
    characters: Character[];
    npcs: NPC[];
}

const EntityList: React.FC<StateProps> = ({ characters, npcs }) => {
    return (
        <EntityListContainer>
            <EntityListWrapper>
                {npcs.map(n => (
                    <EntityListItem key={n.name} type={EntityType.NPC} {...n} removedHitPoints={0} temporaryHitPoints={1} />
                ))}
                {characters.map(c => (
                    <EntityListItem key={c.id} type={EntityType.CHARACTER} {...c} />
                ))}
            </EntityListWrapper>
            <EntityListTopFade />
            <EntityListBottomFade />
            <FancyFrame />
        </EntityListContainer>
    );
};

const mapStateToProps = (state: State): StateProps => ({
    characters: state.characters || [],
    npcs: state.npcs || [],
});

export default connect<StateProps>(mapStateToProps)(EntityList);
