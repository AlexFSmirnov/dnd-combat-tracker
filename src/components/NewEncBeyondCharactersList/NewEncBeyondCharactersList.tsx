import React from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
import { State, BeyondCharacter } from '../../redux/types';
import { NewEncBeyondCharacterListItem } from '../NewEncBeyondCharacterListItem';
import { NewEncCustomCharacterListItem } from '../NewEncCustomCharacterListItem';

interface StateProps {
    characters: BeyondCharacter[];
}

const NewEncBeyondCharactersList = ({ characters }: StateProps) => (
    <React.Fragment>
        {characters.length > 0 
            ? (
                navigator.onLine ? (
                    characters.map(c => <NewEncBeyondCharacterListItem key={c.id} character={c} />)
                ) : (
                    <React.Fragment>
                        <Typography variant="body1">While you are offline your D&D Beyond characters will be treated as custom characters - you'll have to keep track of their hit points manually.</Typography>
                        {characters.map(c => <NewEncCustomCharacterListItem key={c.id} character={{ name: c.name, maxHitPoints: c.maxHitPoints, avatarUrl: c.avatarUrl }} />)}
                    </React.Fragment>
                )
            ) : (
                <Typography variant="body1">Currently you don't have any imported D&D Beyond characters.</Typography>
            )
        }
    </React.Fragment>
);

const mapStateToProps = (state: State) => ({
    characters: (state && state.beyondCharacters) || [],
});

export default connect(mapStateToProps)(NewEncBeyondCharactersList);
