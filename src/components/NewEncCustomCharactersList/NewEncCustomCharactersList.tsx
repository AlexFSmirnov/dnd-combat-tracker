import React from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
import { State, CustomCharacter } from '../../redux/types';
import { NewEncCustomCharacterListItem } from '../NewEncCustomCharacterListItem';

interface StateProps {
    characters: CustomCharacter[];
}

const NewEncCustomCharactersList = ({ characters }: StateProps) => {
    return (
        <React.Fragment>
            {characters.length > 0
                ? characters.map(c => <NewEncCustomCharacterListItem key={c.name} character={c} />)
                : <Typography variant="body1">Currently you don't have any saved custom characters.</Typography>
            }
        </React.Fragment>
    );
};

const mapStateToProps = (state: State) => ({
    characters: (state && state.customCharacters) || [],
});

export default connect(mapStateToProps)(NewEncCustomCharactersList);
