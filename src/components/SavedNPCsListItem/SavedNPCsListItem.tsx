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
import { NPC } from '../../redux/types';
import { updateNPC, deleteNPC } from '../../redux/actions/npcs';
import { SavedNPCListItemContainer, Grow } from './style';

interface DispatchProps {
    updateNPC: typeof updateNPC;
    deleteNPC: typeof deleteNPC;
}

export interface SavedNPCListItemProps {
    npc: NPC;
}

const SavedNPCListItem: React.FC<SavedNPCListItemProps & DispatchProps> = ({ npc, updateNPC, deleteNPC }) => {
    const { name, avatarUrl, maxHitPoints } = npc;

    const [isEditDialogOpen, setIsEditDialogOpen] = useState<boolean>(false);
    const [isDeleteConfirmationDialogOpen, setIsDeleteConfirmationDialogOpen] = useState<boolean>(false);
    const [NPCName, setNPCName] = useState<string>(name);
    const [NPCMaxHitPoints, setNPCMaxHitPoints] = useState<string>(maxHitPoints.toString());
    const [NPCAvatarUrl, setNPCAvatarUrl] = useState<string>(avatarUrl || '');

    const openEditDialog = () => setIsEditDialogOpen(true);
    const closeEditDialog = () => setIsEditDialogOpen(false);

    const openDeleteConfirmationDialog = () => setIsDeleteConfirmationDialogOpen(true);
    const closeDeleteConfirmationDialog = () => setIsDeleteConfirmationDialogOpen(false);

    const handleNPCNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setNPCName(e.target.value);
    const handleMaxHitPointsChange = (e: React.ChangeEvent<HTMLInputElement>) => setNPCMaxHitPoints(e.target.value);
    const handleNpcAvatarUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => setNPCAvatarUrl(e.target.value); 

    const handleEditConfirmed = () => {
        const maxHitPoints = parseInt(NPCMaxHitPoints) || 0;
        updateNPC({
            originalNPC: npc,
            updatedNPC: { name: NPCName, avatarUrl: NPCAvatarUrl, maxHitPoints },
        });
        closeEditDialog();
    };

    const handleDeletionConfirmed = () => {
        closeDeleteConfirmationDialog();
        deleteNPC(npc);
    };

    return (
        <Paper elevation={3} style={{ width: '100%' }}>
            <SavedNPCListItemContainer>
                <Avatar variant="rounded" src={avatarUrl} />
                <Typography variant="h6">{name}</Typography>
                <Grow />
                <IconButton onClick={openEditDialog}>
                    <Edit />
                </IconButton>
                <IconButton onClick={openDeleteConfirmationDialog}>
                    <Delete />
                </IconButton>
            </SavedNPCListItemContainer>
            <Dialog open={isEditDialogOpen} onClose={closeEditDialog}>
                <DialogTitle>Edit {name}</DialogTitle>
                <DialogContent>
                    <DialogContentText>Change name, max hit points or avatar url of your NPC.</DialogContentText>
                    <TextField autoFocus fullWidth margin="dense" label="NPC Name" value={NPCName} onChange={handleNPCNameChange} />
                    <TextField fullWidth type="number" margin="dense" label="Max Hit Points" value={NPCMaxHitPoints} onChange={handleMaxHitPointsChange} />
                    <TextField fullWidth margin="dense" label="Avatar URL" value={NPCAvatarUrl} onChange={handleNpcAvatarUrlChange} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeEditDialog} color="secondary">Cancel</Button>
                    <Button onClick={handleEditConfirmed} color="primary" variant="contained">Save</Button>
                </DialogActions>
            </Dialog>
            <Dialog open={isDeleteConfirmationDialogOpen} onClose={closeDeleteConfirmationDialog}>
                <DialogTitle>Are you sure you want to delete {name}?</DialogTitle>
                <DialogContent>
                    <DialogContentText>This will remove them from your list of saved NPCs. You will only be able to undo this by creating this NPC again.</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeDeleteConfirmationDialog} color="secondary">Cancel</Button>
                    <Button onClick={handleDeletionConfirmed} color="primary" variant="contained">Delete</Button>
                </DialogActions>
            </Dialog>
        </Paper>
    );
};

export default connect(null, { updateNPC, deleteNPC })(SavedNPCListItem);
