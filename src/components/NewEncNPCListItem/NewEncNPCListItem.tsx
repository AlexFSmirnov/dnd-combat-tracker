import React from 'react';
import { Checkbox, Paper, Typography, TextField, IconButton } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import { NPC } from '../../redux/types';
import { NewEncNPCListItemContainer } from './style';

export interface NewEncNPCListItemProps {
    npc: NPC;
}

const NewEncNPCListItem = ({ npc }: NewEncNPCListItemProps) => {
    return (
        <Paper elevation={3} style={{ width: '100%', height: '56px' }}>
            <NewEncNPCListItemContainer>
                <Checkbox checked color="primary" />
                <Typography variant="h6">{npc.name}</Typography>
                <div style={{ flexGrow: 1 }} />
                <TextField label="Initiative" type="number" style={{ width: '64px' }} />
                <IconButton size="small">
                    <Remove />
                </IconButton>
                <IconButton size="small">
                    <Add />
                </IconButton>
            </NewEncNPCListItemContainer>
        </Paper>
    );
};

export default NewEncNPCListItem;
