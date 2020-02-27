import React from 'react';
import { connect } from 'react-redux';
import { State, Character } from '../../redux/types';
import { CharacterListItem } from '../CharacterListItem';
import { EntityListContainer } from './style';

interface StateProps {
    characters: Character[];
}

const EntityList: React.FC<StateProps> = ({ characters }) => {
    return (
        <EntityListContainer>
            {characters.map(c => (
                <CharacterListItem key={c.id} character={c} />
            ))}
        </EntityListContainer>
    );
};

const mapStateToProps = (state: State): StateProps => ({
    characters: state.characters || [],
});

export default connect<StateProps>(mapStateToProps)(EntityList);
