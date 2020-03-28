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
import { BeyondCharacter } from '../../redux/types';
import { updateBeyondCharacterMaxHp, deleteBeyondCharacter } from '../../redux/actions/beyondCharacters';
import { SavedBeyondCharacterListItemContainer, Grow } from './style';

interface DispatchProps {
    updateBeyondCharacterMaxHp: typeof updateBeyondCharacterMaxHp;
    deleteBeyondCharacter: typeof deleteBeyondCharacter;
}

export interface SavedBeyondCharacterListItemProps {
    character: BeyondCharacter;
}

const SavedBeyondCharacterListItem: React.FC<SavedBeyondCharacterListItemProps & DispatchProps> = ({ character, updateBeyondCharacterMaxHp, deleteBeyondCharacter }) => {
    const [maxHp, setMaxHp] = useState<string>(character.maxHitPoints.toString());
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

    const openConfirmationDialog = () => setIsDialogOpen(true);
    const closeConfirmationDialog = () => setIsDialogOpen(false);

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id } = character;
        const { value } = e.target;

        setMaxHp(value);
        updateBeyondCharacterMaxHp(id, parseInt(value) || 0);
    };

    const handleDeletionConfirmed = () => {
        const { id } = character;
        deleteBeyondCharacter(id);
        closeConfirmationDialog();
    };

    const { name, avatarUrl } = character;

    return (
        <Paper elevation={3} style={{ width: '100%', height: '56px' }}>
            <SavedBeyondCharacterListItemContainer>
                <Avatar variant="rounded" src={avatarUrl} />
                <Typography variant="h6">{name}</Typography>
                <Grow />
                <TextField label="Max HP" type="number" value={maxHp} onChange={onInputChange} style={{ width: '64px' }} />
                <IconButton onClick={openConfirmationDialog}>
                    <Delete />
                </IconButton>
            </SavedBeyondCharacterListItemContainer>
            <Dialog open={isDialogOpen} onClose={closeConfirmationDialog}>
                <DialogTitle>Are you sure you want to delete {name}?</DialogTitle>
                <DialogContent>
                    <DialogContentText>This will remove them from your list of saved D&D Beyond characters. You will only be able to undo this by importing this character again.</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeConfirmationDialog} color="secondary">Cancel</Button>
                    <Button onClick={handleDeletionConfirmed} color="primary" variant="contained">Delete</Button>
                </DialogActions>
            </Dialog>
        </Paper>
    );
};

export default connect(null, { updateBeyondCharacterMaxHp, deleteBeyondCharacter })(SavedBeyondCharacterListItem);
