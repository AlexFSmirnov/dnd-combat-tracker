import React, { useState, useMemo, useEffect } from 'react';
import { connect } from 'react-redux';
import { keys, isNaN } from 'lodash/fp';
import { useTheme, useMediaQuery, Checkbox, Paper, Typography, TextField } from '@material-ui/core';
import { Character, State } from '../../redux/types';
import { EncounterState } from '../../redux/reducers/encounter';
import { addCharacterToEncounter, removeCharacterFromEncounter, updateCharacterInitiative } from '../../redux/actions/encounter';
import { NewEncCharacterListItemContainer } from './style';

interface StateProps {
    encounter: EncounterState | null;
}

interface DispatchProps {
    addCharacterToEncounter: typeof addCharacterToEncounter;
    removeCharacterFromEncounter: typeof removeCharacterFromEncounter;
    updateCharacterInitiative: typeof updateCharacterInitiative;
}

export interface NewEncCharacterListItemProps {
    character: Character;
}

const NewEncCharacterListItem = ({
    character,
    encounter,
    addCharacterToEncounter,
    removeCharacterFromEncounter,
    updateCharacterInitiative,
}: NewEncCharacterListItemProps & StateProps & DispatchProps) => {
    const theme = useTheme();
    const small = useMediaQuery(theme.breakpoints.down('sm'));
    const [initiative, setInitiative] = useState('');

    const isCharacterSelected = useMemo(() => {
        if (!encounter) {
            return false;
        }

        return Object.keys(encounter.characters).some(key => encounter.characters[parseInt(key)].name === character.name);
    }, [character, encounter]);

    useEffect(() => {
        if (!isCharacterSelected) {
            setInitiative('');
        }
    }, [isCharacterSelected]);

    useEffect(() => {
        if (encounter) {
            const key = keys(encounter.characters).find(k => encounter.characters[parseInt(k)].name === character.name);
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
            removeCharacterFromEncounter(character);
            setInitiative('');
        } else {
            addCharacterToEncounter(character);

            const initiativeInt = parseInt(initiative);
            if (!isNaN(initiativeInt)) {
                updateCharacterInitiative(character, initiativeInt);
            }
        }
    };

    const handleInitiativeChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setInitiative(value);

        const initiativeInt = parseInt(value);
        if (!isNaN(initiativeInt)) {
            updateCharacterInitiative(character, initiativeInt);
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
            <NewEncCharacterListItemContainer>
                <Checkbox disabled={!encounter} checked={isCharacterSelected} color="primary" onClick={handleCheckboxClick} />
                <Typography variant={small ? 'body1' : 'h6'}>{character.name}</Typography>
                <div style={{ flexGrow: 1 }} />
                <TextField {...textFieldProps} />
            </NewEncCharacterListItemContainer>
        </Paper>
    );
};

const mapStateToProps = (state: State) => ({
    encounter: (state && state.encounter) || null,
});

export default connect(mapStateToProps, { addCharacterToEncounter, removeCharacterFromEncounter, updateCharacterInitiative })(NewEncCharacterListItem);
