import React, { useState, useMemo, useEffect } from 'react';
import { connect } from 'react-redux';
import { keys, reduce, isNaN } from 'lodash/fp';
import { Paper, Typography, TextField, IconButton, useTheme, useMediaQuery } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import { CustomCharacter, State } from '../../redux/types';
import { EncounterState } from '../../redux/reducers/encounter';
import { addCustomCharacterToEncounter, removeCustomCharacterFromEncounter, updateCustomCharacterInitiative } from '../../redux/actions/encounter';
import { NewEncCustomCharacterListItemContainer, Counter } from './style';

interface StateProps {
    encounter: EncounterState | null;
}

interface DispatchProps {
    addCustomCharacterToEncounter: typeof addCustomCharacterToEncounter;
    removeCustomCharacterFromEncounter: typeof removeCustomCharacterFromEncounter;
    updateCustomCharacterInitiative: typeof updateCustomCharacterInitiative;
}

export interface NewEncCustomCharacterListItemProps {
    character: CustomCharacter;
}

const NewEncCustomCharacterListItem = ({ character, encounter, addCustomCharacterToEncounter, removeCustomCharacterFromEncounter, updateCustomCharacterInitiative }: NewEncCustomCharacterListItemProps & StateProps & DispatchProps) => {
    const theme = useTheme();
    const small = useMediaQuery(theme.breakpoints.down('sm'));
    const [initiative, setInitiative] = useState('');

    const addedCharactersCount = useMemo(() => {
        if (!encounter) {
            return null;
        }

        const count = reduce((accumulator, c) => accumulator + (c.name.startsWith(character.name) ? 1 : 0), 0, encounter.customCharacters);
        return count === 0 ? null : count;
    }, [character, encounter]);

    useEffect(() => {
        if (!addedCharactersCount) {
            setInitiative('');
        }
    }, [addedCharactersCount]);

    useEffect(() => {
        if (encounter) {
            const key = keys(encounter.customCharacters).find(k => encounter.customCharacters[parseInt(k)].name === character.name);
            if (key === undefined || isNaN(parseInt(key))) {
                return;
            }

            const savedInitiative = encounter.initiativeById[parseInt(key)];
            if (savedInitiative !== undefined) {
                setInitiative(savedInitiative.toString());
            }
        }
    }, []);  // eslint-disable-line

    const handleRemoveClick = () => removeCustomCharacterFromEncounter(character);
    const handleAddClick = () => {
        addCustomCharacterToEncounter(character);

        const initiativeInt = parseInt(initiative);
        if (!isNaN(initiativeInt)) {
            updateCustomCharacterInitiative(character, initiativeInt);
        }
    };
    const handleCounterClick = () => {
        if (!addedCharactersCount || addedCharactersCount === 0) {
            handleAddClick();
        } else {
            for (let i = 0; i < addedCharactersCount; ++i) {
                handleRemoveClick();
            }
        }
    };

    const handleInitiativeChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setInitiative(value);

        const initiativeInt = parseInt(value);
        if (!isNaN(initiativeInt)) {
            updateCustomCharacterInitiative(character, initiativeInt);
        }
    };

    const textFieldProps = {
        disabled: !addedCharactersCount,
        label: !!addedCharactersCount ? 'Initiative' : '',
        type: 'number',
        value: initiative,
        onChange: handleInitiativeChanged,
        style: {
            width: '64px',
        },
    };

    return (
        <Paper elevation={3} style={{ width: '100%', height: '56px' }}>
            <NewEncCustomCharacterListItemContainer>
                <Counter palette={theme.palette} onClick={handleCounterClick}>
                    {addedCharactersCount}
                </Counter>
                <Typography variant={small ? 'body1' : 'h6'}>{character.name}</Typography>
                <div style={{ flexGrow: 1 }} />
                <TextField {...textFieldProps} />
                <IconButton size="small" onClick={handleRemoveClick} disabled={!addedCharactersCount}>
                    <Remove />
                </IconButton>
                <IconButton size="small" onClick={handleAddClick}>
                    <Add />
                </IconButton>
            </NewEncCustomCharacterListItemContainer>
        </Paper>
    );
};

const mapStateToProps = (state: State) => ({
    encounter: (state && state.encounter) || null,
});

export default connect(mapStateToProps, { addCustomCharacterToEncounter, removeCustomCharacterFromEncounter, updateCustomCharacterInitiative })(NewEncCustomCharacterListItem);
