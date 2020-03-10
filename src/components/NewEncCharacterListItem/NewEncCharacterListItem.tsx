import React from 'react';
import { Checkbox, Paper, Typography, TextField, IconButton } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import { Character } from '../../redux/types';
import { NewEncCharacterListItemContainer } from './style';

export interface NewEncCharacterListItemProps {
    character: Character;
}

const NewEncCharacterListItem = ({ character }: NewEncCharacterListItemProps) => {
    return (
        <Paper elevation={3} style={{ width: '100%', height: '56px' }}>
            <NewEncCharacterListItemContainer>
                <Checkbox checked color="primary" />
                <Typography variant="h6">{character.name}</Typography>
                <div style={{ flexGrow: 1 }} />
                <TextField label="Initiative" type="number" style={{ width: '64px' }} />
            </NewEncCharacterListItemContainer>
        </Paper>
    );
};

export default NewEncCharacterListItem;
