import React from 'react';
import { connect } from 'react-redux';
import { State, Character } from '../../redux/types';
import { FancyFrame } from '../Frame';
import { CharacterListItem } from '../CharacterListItem';
import { EntityListContainer, EntityListWrapper, EntityListBottomFade, EntityListTopFade } from './style';

interface StateProps {
    characters: Character[];
}

const EntityList: React.FC<StateProps> = ({ characters }) => {
    return (
        <EntityListContainer>
            <EntityListWrapper>
                {characters.map(c => (
                    <CharacterListItem key={c.id} character={c} />
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
});

export default connect<StateProps>(mapStateToProps)(EntityList);
