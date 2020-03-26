import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { reduce } from 'lodash/fp';
import { Checkbox, Paper, Typography, TextField, IconButton, useTheme } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import { NPC, State } from '../../redux/types';
import { NewEncNPCListItemContainer, NewEncNPCCounter } from './style';
import { addNPCToEncounter, removeNPCFromEncounter } from '../../redux/actions/encounter';
import { EncounterState } from '../../redux/reducers/encounter';

interface StateProps {
    encounter: EncounterState | null;
}

interface DispatchProps {
    addNPCToEncounter: typeof addNPCToEncounter;
    removeNPCFromEncounter: typeof removeNPCFromEncounter;
}

export interface NewEncNPCListItemProps {
    npc: NPC;
}

const NewEncNPCListItem = ({ npc, encounter, addNPCToEncounter, removeNPCFromEncounter }: NewEncNPCListItemProps & StateProps & DispatchProps) => {
    const theme = useTheme();

    const addedNPCCount = useMemo(() => {
        if (!encounter) {
            return null;
        }

        const count = reduce((accumulator, encNpc) => accumulator + (encNpc.name.startsWith(npc.name) ? 1 : 0), 0, encounter.npcs);
        return count === 0 ? null : count;
    }, [npc, encounter]);

    const handleRemoveClick = () => removeNPCFromEncounter(npc);
    const handleAddClick = () => addNPCToEncounter(npc);

    return (
        <Paper elevation={3} style={{ width: '100%', height: '56px' }}>
            <NewEncNPCListItemContainer>
                <NewEncNPCCounter palette={theme.palette}>
                    {addedNPCCount}
                </NewEncNPCCounter>
                <Typography variant="h6">{npc.name}</Typography>
                <div style={{ flexGrow: 1 }} />
                <TextField disabled={!addedNPCCount} label={!!addedNPCCount ? 'Initiative' : ''} type="number" style={{ width: '64px' }} />
                <IconButton size="small" onClick={handleRemoveClick}>
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

export default connect(mapStateToProps, { addNPCToEncounter, removeNPCFromEncounter })(NewEncNPCListItem);
