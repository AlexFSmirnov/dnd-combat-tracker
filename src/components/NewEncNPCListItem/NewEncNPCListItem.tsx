import React, { useState, useMemo, useEffect } from 'react';
import { connect } from 'react-redux';
import { keys, reduce } from 'lodash/fp';
import { Paper, Typography, TextField, IconButton, useTheme } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import { NPC, State } from '../../redux/types';
import { EncounterState } from '../../redux/reducers/encounter';
import { addNPCToEncounter, removeNPCFromEncounter, updateNPCInitiative } from '../../redux/actions/encounter';
import { NewEncNPCListItemContainer, NewEncNPCCounter } from './style';

interface StateProps {
    encounter: EncounterState | null;
}

interface DispatchProps {
    addNPCToEncounter: typeof addNPCToEncounter;
    removeNPCFromEncounter: typeof removeNPCFromEncounter;
    updateNPCInitiative: typeof updateNPCInitiative;
}

export interface NewEncNPCListItemProps {
    npc: NPC;
}

const NewEncNPCListItem = ({ npc, encounter, addNPCToEncounter, removeNPCFromEncounter, updateNPCInitiative }: NewEncNPCListItemProps & StateProps & DispatchProps) => {
    const theme = useTheme();
    const [initiative, setInitiative] = useState('');

    const addedNPCCount = useMemo(() => {
        if (!encounter) {
            return null;
        }

        const count = reduce((accumulator, encNpc) => accumulator + (encNpc.name.startsWith(npc.name) ? 1 : 0), 0, encounter.npcs);
        return count === 0 ? null : count;
    }, [npc, encounter]);

    useEffect(() => {
        if (!addedNPCCount) {
            setInitiative('');
        }
    }, [addedNPCCount]);

    useEffect(() => {
        if (encounter) {
            const key = keys(encounter.npcs).find(k => encounter.npcs[parseInt(k)].name === npc.name);
            if (key === undefined || parseInt(key) === NaN) {
                return;
            }

            const savedInitiative = encounter.initiativeById[parseInt(key)];
            if (savedInitiative !== undefined) {
                setInitiative(savedInitiative.toString());
            }
        }
    }, []);

    const handleRemoveClick = () => removeNPCFromEncounter(npc);
    const handleAddClick = () => {
        addNPCToEncounter(npc);

        const initiativeInt = parseInt(initiative);
        if (initiativeInt !== NaN) {
            updateNPCInitiative(npc, initiativeInt);
        }
    };

    const handleInitiativeChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setInitiative(value);

        const initiativeInt = parseInt(value);
        if (initiativeInt !== NaN) {
            updateNPCInitiative(npc, initiativeInt);
        }
    };

    const textFieldProps = {
        disabled: !addedNPCCount,
        label: !!addedNPCCount ? 'Initiative' : '',
        type: 'number',
        value: initiative,
        onChange: handleInitiativeChanged,
        style: {
            width: '64px',
        },
    };

    return (
        <Paper elevation={3} style={{ width: '100%', height: '56px' }}>
            <NewEncNPCListItemContainer>
                <NewEncNPCCounter palette={theme.palette} onClick={handleAddClick}>
                    {addedNPCCount}
                </NewEncNPCCounter>
                <Typography variant="h6">{npc.name}</Typography>
                <div style={{ flexGrow: 1 }} />
                <TextField {...textFieldProps} />
                <IconButton size="small" onClick={handleRemoveClick} disabled={!addedNPCCount}>
                    <Remove />
                </IconButton>
                <IconButton size="small" onClick={handleAddClick}>
                    <Add />
                </IconButton>
            </NewEncNPCListItemContainer>
        </Paper>
    );
};

const mapStateToProps = (state: State) => ({
    encounter: (state && state.encounter) || null,
});

export default connect(mapStateToProps, { addNPCToEncounter, removeNPCFromEncounter, updateNPCInitiative })(NewEncNPCListItem);
