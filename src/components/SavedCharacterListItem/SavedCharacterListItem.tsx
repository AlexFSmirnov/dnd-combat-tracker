import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
    Paper,
    Avatar,
    Typography,
    TextField,
    Button,
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { Character } from '../../redux/types';
import { updateCharacterMaxHp, deleteCharacter } from '../../redux/actions/characters';
import { SavedCharacterListItemContainer, Grow } from './style';

interface DispatchProps {
    updateCharacterMaxHp: typeof updateCharacterMaxHp;
    deleteCharacter: typeof deleteCharacter;
}

export interface SavedCharacterListItemProps {
    character: Character;
}

const SavedCharacterListItem: React.FC<SavedCharacterListItemProps & DispatchProps> = ({ character, updateCharacterMaxHp, deleteCharacter }) => {
    const [maxHp, setMaxHp] = useState<string>(character.maxHitPoints.toString());
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

    const openConfirmationDialog = () => setIsDialogOpen(true);
    const closeConfirmationDialog = () => setIsDialogOpen(false);

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id } = character;
        const { value } = e.target;

        setMaxHp(value);
        updateCharacterMaxHp(id, parseInt(value) || 0);
    };

    const onDeletionConfirmed = () => {
        const { id } = character;
        deleteCharacter(id);
        closeConfirmationDialog();
    };

    const { name, avatarUrl } = character;

    return (
        <Paper elevation={3} style={{ width: '100%' }}>
            <SavedCharacterListItemContainer>
                <Avatar variant="rounded" src={avatarUrl} />
                <Typography variant="h6">{name}</Typography>
                <Grow />
                <TextField label="Max HP" type="number" value={maxHp} onChange={onInputChange} style={{ width: '64px' }} />
                <IconButton onClick={openConfirmationDialog}>
                    <Delete />
                </IconButton>
            </SavedCharacterListItemContainer>
            <Dialog open={isDialogOpen} onClose={closeConfirmationDialog}>
                <DialogTitle>Are you sure you want to delete {name}?</DialogTitle>
                <DialogContent>
                    <DialogContentText>This will remove them from your list of saved characters. You will only be able to undo this by adding this character again.</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeConfirmationDialog} color="secondary">Cancel</Button>
                    <Button onClick={onDeletionConfirmed} color="primary" variant="contained">Delete</Button>
                </DialogActions>
            </Dialog>
        </Paper>
    );
};

export default connect(null, { updateCharacterMaxHp, deleteCharacter })(SavedCharacterListItem);
