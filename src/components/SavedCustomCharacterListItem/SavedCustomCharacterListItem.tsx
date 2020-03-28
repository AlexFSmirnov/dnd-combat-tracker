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
import { Edit, Delete } from '@material-ui/icons';
import { CustomCharacter } from '../../redux/types';
import { updateCustomCharacterSafe, deleteCustomCharacter, UpdateCustomCharacterProps } from '../../redux/actions/customCharacters';
import { SavedCustomCharacterListItemContainer, Grow } from './style';

interface DispatchProps {
    updateCustomCharacterSafe: (props: UpdateCustomCharacterProps) => void;
    deleteCustomCharacter: typeof deleteCustomCharacter;
}

export interface SavedCustomCharacterListItemProps {
    character: CustomCharacter;
}

const SavedCustomCharacterListItem: React.FC<SavedCustomCharacterListItemProps & DispatchProps> = ({ character, updateCustomCharacterSafe, deleteCustomCharacter }) => {
    const { name, avatarUrl, maxHitPoints } = character;

    const [isEditDialogOpen, setIsEditDialogOpen] = useState<boolean>(false);
    const [isDeleteConfirmationDialogOpen, setIsDeleteConfirmationDialogOpen] = useState<boolean>(false);
    const [nameInputValue, setnameInputValue] = useState<string>(name);
    const [hitPointsInputValue, setHitPointsInputValue] = useState<string>(maxHitPoints.toString());
    const [avatarUrlInputValue, setAvatarUrlInputValue] = useState<string>(avatarUrl || '');

    const openEditDialog = () => setIsEditDialogOpen(true);
    const closeEditDialog = () => setIsEditDialogOpen(false);

    const openDeleteConfirmationDialog = () => setIsDeleteConfirmationDialogOpen(true);
    const closeDeleteConfirmationDialog = () => setIsDeleteConfirmationDialogOpen(false);

    const handlenameInputValueChange = (e: React.ChangeEvent<HTMLInputElement>) => setnameInputValue(e.target.value);
    const handleMaxHitPointsChange = (e: React.ChangeEvent<HTMLInputElement>) => setHitPointsInputValue(e.target.value);
    const handleAvatarUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => setAvatarUrlInputValue(e.target.value); 

    const handleEditConfirmed = () => {
        updateCustomCharacterSafe({
            originalCharacter: character,
            updatedCharacter: {
                name: nameInputValue,
                avatarUrl: avatarUrlInputValue,
                maxHitPoints: parseInt(hitPointsInputValue) || 0,
            },
        });
        closeEditDialog();
    };

    const handleDeletionConfirmed = () => {
        closeDeleteConfirmationDialog();
        deleteCustomCharacter(character);
    };

    return (
        <Paper elevation={3} style={{ width: '100%', height: '56px' }}>
            <SavedCustomCharacterListItemContainer>
                <Avatar variant="rounded" src={avatarUrl} />
                <Typography variant="h6">{name}</Typography>
                <Grow />
                <IconButton onClick={openEditDialog}>
                    <Edit />
                </IconButton>
                <IconButton onClick={openDeleteConfirmationDialog}>
                    <Delete />
                </IconButton>
            </SavedCustomCharacterListItemContainer>
            <Dialog open={isEditDialogOpen} onClose={closeEditDialog}>
                <DialogTitle>Edit {name}</DialogTitle>
                <DialogContent>
                    <DialogContentText>Change name, max hit points or avatar url of your custom character.</DialogContentText>
                    <TextField fullWidth margin="dense" label="Character Name" value={nameInputValue} onChange={handlenameInputValueChange} />
                    <TextField fullWidth type="number" margin="dense" label="Max Hit Points" value={hitPointsInputValue} onChange={handleMaxHitPointsChange} />
                    <TextField fullWidth margin="dense" label="Avatar URL" value={avatarUrlInputValue} onChange={handleAvatarUrlChange} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeEditDialog} color="secondary">Cancel</Button>
                    <Button onClick={handleEditConfirmed} color="primary" variant="contained">Save</Button>
                </DialogActions>
            </Dialog>
            <Dialog open={isDeleteConfirmationDialogOpen} onClose={closeDeleteConfirmationDialog}>
                <DialogTitle>Are you sure you want to delete {name}?</DialogTitle>
                <DialogContent>
                    <DialogContentText>This will remove them from your list of saved custom characters. You will only be able to undo this by creating this character again.</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeDeleteConfirmationDialog} color="secondary">Cancel</Button>
                    <Button onClick={handleDeletionConfirmed} color="primary" variant="contained">Delete</Button>
                </DialogActions>
            </Dialog>
        </Paper>
    );
};

export default connect(null, { updateCustomCharacterSafe, deleteCustomCharacter })(SavedCustomCharacterListItem);
