import React from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
import { State, BeyondCharacter } from '../../redux/types';
import { NewEncBeyondCharacterListItem } from '../NewEncBeyondCharacterListItem';

interface StateProps {
    characters: BeyondCharacter[];
}

const NewEncBeyondCharactersList = ({ characters }: StateProps) => {
    return (
        <React.Fragment>
            {characters.length > 0
                ? characters.map(c => <NewEncBeyondCharacterListItem key={c.id} character={c} />)
                : <Typography variant="body1">Currently you don't have any imported D&D Beyond characters.</Typography>
            }
        </React.Fragment>
    );
};

const mapStateToProps = (state: State) => ({
    characters: (state && state.beyondCharacters) || [],
});

export default connect(mapStateToProps)(NewEncBeyondCharactersList);
