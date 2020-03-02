import React from 'react';
import { connect } from 'react-redux';
import { State, Character } from '../../redux/types';
import { SavedCharacterListItem } from '../SavedCharacterListItem';
import { SavedCharactersListContainer } from './style';

interface StateProps {
    characters: Character[];
}

export interface SavedCharactersListProps {

}

const SavedCharactersList: React.FC<SavedCharactersListProps & StateProps> = ({ characters }) => {
    return (
        <SavedCharactersListContainer>
            {characters.map(c => (
                <SavedCharacterListItem key={c.id} character={c} />
            ))}
        </SavedCharactersListContainer>
    );
};

const mapStateToProps = (state: State) => ({
    characters: (state && state.characters) || [],
});

export default connect(mapStateToProps)(SavedCharactersList);
