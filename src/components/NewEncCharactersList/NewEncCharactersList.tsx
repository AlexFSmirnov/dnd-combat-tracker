import React from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
import { State, Character } from '../../redux/types';
import { NewEncCharacterListItem } from '../NewEncCharacterListItem';

interface StateProps {
    characters: Character[];
}

const NewEncCharactersList = ({ characters }: StateProps) => {
    return (
        <React.Fragment>
            <Typography variant="h5">Characters</Typography>
            {characters.map(c => <NewEncCharacterListItem key={c.id} character={c} />)}
        </React.Fragment>
    );
};

const mapStateToProps = (state: State) => ({
    characters: (state && state.characters) || [],
});

export default connect(mapStateToProps)(NewEncCharactersList);
