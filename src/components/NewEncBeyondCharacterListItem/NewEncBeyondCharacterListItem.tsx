import React, { useState, useMemo, useEffect } from 'react';
import { connect } from 'react-redux';
import { keys, isNaN } from 'lodash/fp';
import { useTheme, useMediaQuery, Checkbox, Paper, Typography, TextField } from '@material-ui/core';
import { BeyondCharacter, State } from '../../redux/types';
import { EncounterState } from '../../redux/reducers/encounter';
import { addBeyondCharacterToEncounter, removeBeyondCharacterFromEncounter, updateBeyondCharacterInitiative } from '../../redux/actions/encounter';
import { NewEncBeyondCharacterListItemContainer } from './style';

interface StateProps {
    encounter: EncounterState | null;
}

interface DispatchProps {
    addBeyondCharacterToEncounter: typeof addBeyondCharacterToEncounter;
    removeBeyondCharacterFromEncounter: typeof removeBeyondCharacterFromEncounter;
    updateBeyondCharacterInitiative: typeof updateBeyondCharacterInitiative;
}

export interface NewEncBeyondCharacterListItemProps {
    character: BeyondCharacter;
}

const NewEncBeyondCharacterListItem = ({
    character,
    encounter,
    addBeyondCharacterToEncounter,
    removeBeyondCharacterFromEncounter,
    updateBeyondCharacterInitiative,
}: NewEncBeyondCharacterListItemProps & StateProps & DispatchProps) => {
    const theme = useTheme();
    const small = useMediaQuery(theme.breakpoints.down('sm'));
    const [initiative, setInitiative] = useState('');

    const isCharacterSelected = useMemo(() => {
        if (!encounter) {
            return false;
        }

        return Object.keys(encounter.beyondCharacters).some(key => encounter.beyondCharacters[parseInt(key)].name === character.name);
    }, [character, encounter]);

    useEffect(() => {
        if (!isCharacterSelected) {
            setInitiative('');
        }
    }, [isCharacterSelected]);

    useEffect(() => {
        if (encounter) {
            const key = keys(encounter.beyondCharacters).find(k => encounter.beyondCharacters[parseInt(k)].name === character.name);
            if (key === undefined || isNaN(parseInt(key))) {
                return;
            }

            const savedInitiative = encounter.initiativeById[parseInt(key)];
            if (savedInitiative !== undefined) {
                setInitiative(savedInitiative.toString());
            }
        }
    }, []);  // eslint-disable-line

    const handleCheckboxClick = () => {
        if (isCharacterSelected) {
            removeBeyondCharacterFromEncounter(character);
            setInitiative('');
        } else {
            addBeyondCharacterToEncounter(character);

            const initiativeInt = parseInt(initiative);
            if (!isNaN(initiativeInt)) {
                updateBeyondCharacterInitiative(character, initiativeInt);
            }
        }
    };

    const handleInitiativeChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setInitiative(value);

        const initiativeInt = parseInt(value);
        if (!isNaN(initiativeInt)) {
            updateBeyondCharacterInitiative(character, initiativeInt);
        }
    };

    const textFieldProps = {
        disabled: !isCharacterSelected,
        label: isCharacterSelected ? 'Initiative' : '',
        type: 'number',
        value: initiative,
        onChange: handleInitiativeChanged,
        style: {
            width: '64px',
        },
    };

    return (
        <Paper elevation={3} style={{ width: '100%', height: '56px' }}>
            <NewEncBeyondCharacterListItemContainer>
                <Checkbox disabled={!encounter} checked={isCharacterSelected} color="primary" onClick={handleCheckboxClick} />
                <Typography variant={small ? 'body1' : 'h6'}>{character.name}</Typography>
                <div style={{ flexGrow: 1 }} />
                <TextField {...textFieldProps} />
            </NewEncBeyondCharacterListItemContainer>
        </Paper>
    );
};

const mapStateToProps = (state: State) => ({
    encounter: (state && state.encounter) || null,
});

export default connect(mapStateToProps, { addBeyondCharacterToEncounter, removeBeyondCharacterFromEncounter, updateBeyondCharacterInitiative })(NewEncBeyondCharacterListItem);
