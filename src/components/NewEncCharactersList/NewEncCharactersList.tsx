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
            {characters.length > 0
                ? characters.map(c => <NewEncCharacterListItem key={c.id} character={c} />)
                : <Typography variant="body1">Currently you don't have any saved characters.</Typography>
            }
        </React.Fragment>
    );
};

const mapStateToProps = (state: State) => ({
    characters: (state && state.characters) || [],
});

export default connect(mapStateToProps)(NewEncCharactersList);
