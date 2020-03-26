import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { Checkbox, Paper, Typography, TextField, IconButton } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import { Character, State } from '../../redux/types';
import { EncounterState } from '../../redux/reducers/encounter';
import { NewEncCharacterListItemContainer } from './style';
import { addCharacterToEncounter, removeCharacterFromEncounter } from '../../redux/actions/encounter';

interface StateProps {
    encounter: EncounterState | null;
}

interface DispatchProps {
    addCharacterToEncounter: typeof addCharacterToEncounter;
    removeCharacterFromEncounter: typeof removeCharacterFromEncounter;
}

export interface NewEncCharacterListItemProps {
    character: Character;
}

const NewEncCharacterListItem = ({ character, encounter, addCharacterToEncounter, removeCharacterFromEncounter }: NewEncCharacterListItemProps & StateProps & DispatchProps) => {
    const isCharacterSelected = useMemo(() => {
        if (!encounter) {
            return false;
        }

        return Object.keys(encounter.characters).some(key => encounter.characters[parseInt(key)].name === character.name);
    }, [character, encounter]);

    const handleCheckboxClick = () => {
        if (isCharacterSelected) {
            removeCharacterFromEncounter(character);
        } else {
            addCharacterToEncounter(character);
        }
    };

    console.log(encounter);

    return (
        <Paper elevation={3} style={{ width: '100%', height: '56px' }}>
            <NewEncCharacterListItemContainer>
                <Checkbox disabled={!encounter} checked={isCharacterSelected} color="primary" onClick={handleCheckboxClick} />
                <Typography variant="h6">{character.name}</Typography>
                <div style={{ flexGrow: 1 }} />
                <TextField disabled={!isCharacterSelected} label={isCharacterSelected ? 'Initiative' : ''} type="number" style={{ width: '64px' }} />
            </NewEncCharacterListItemContainer>
        </Paper>
    );
};

const mapStateToProps = (state: State) => ({
    encounter: (state && state.encounter) || null,
});

export default connect(mapStateToProps, { addCharacterToEncounter, removeCharacterFromEncounter })(NewEncCharacterListItem);
