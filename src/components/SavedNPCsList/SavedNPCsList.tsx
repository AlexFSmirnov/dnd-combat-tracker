import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField, Button, Typography } from '@material-ui/core';
import { addNPCSafe } from '../../redux/actions/npcs';
import { State, NPC } from '../../redux/types';
import { SavedNPCListItem } from '../SavedNPCListItem';

interface StateProps {
    npcs: NPC[];
}

interface DispatchProps {
    addNPCSafe: (npc: NPC) => void;
}

export interface SavedCharactersListProps {
    small?: boolean;
}

const SavedCharactersList: React.FC<SavedCharactersListProps & StateProps & DispatchProps> = ({ small, npcs, addNPCSafe }) => {
    const [isNewNPCDialogOpen, setIsNewNPCDialogOpen] = useState<boolean>(false);
    const [NPCName, setNPCName] = useState<string>('');
    const [NPCMaxHitPoints, setNPCMaxHitPoints] = useState<string>('');
    const [NPCAvatarUrl, setNPCAvatarUrl] = useState<string>('');

    const openNewNPCDialog = () => setIsNewNPCDialogOpen(true);
    const closeNewNPCDialog = () => setIsNewNPCDialogOpen(false);

    const handleNPCNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setNPCName(e.target.value);
    const handleMaxHitPointsChange = (e: React.ChangeEvent<HTMLInputElement>) => setNPCMaxHitPoints(e.target.value);
    const handleNpcAvatarUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => setNPCAvatarUrl(e.target.value); 

    const handleNewNPCConfirmed = () => {
        const maxHitPoints = parseInt(NPCMaxHitPoints) || 0;
        addNPCSafe({ name: NPCName, maxHitPoints, avatarUrl: NPCAvatarUrl });

        closeNewNPCDialog();
        setNPCName('');
        setNPCMaxHitPoints('');
        setNPCAvatarUrl('');
    };

    return (
        <React.Fragment>
            {npcs.length > 0
                ? npcs.map(c => <SavedNPCListItem key={c.name} npc={c} />)
                : <Typography variant="body1">Currently you don't have any saved NPCs.</Typography>
            }
            <Button variant="outlined" color="primary" onClick={openNewNPCDialog}>Add NPC</Button>
            <Dialog open={isNewNPCDialogOpen} onClose={closeNewNPCDialog}>
                <DialogTitle>Create new NPC</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Choose a name for your NPC and specify maximum hit points. Optionally, specify an avatar url or pick one of the default avatars.
                        <br /> <br />
                        It is not possible to have several NPCs with the same name.
                    </DialogContentText>
                    <TextField autoFocus fullWidth margin="dense" label="NPC Name" value={NPCName} onChange={handleNPCNameChange} />
                    <TextField fullWidth type="number" margin="dense" label="Max Hit Points" value={NPCMaxHitPoints} onChange={handleMaxHitPointsChange} />
                    <TextField fullWidth margin="dense" label="Avatar URL" value={NPCAvatarUrl} onChange={handleNpcAvatarUrlChange} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeNewNPCDialog} color="secondary">Cancel</Button>
                    <Button onClick={handleNewNPCConfirmed} color="primary" variant="contained" disabled={!NPCName || !NPCMaxHitPoints}>Create</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
};

const mapStateToProps = (state: State) => ({
    npcs: (state && state.npcs) || [],
});

export default connect(mapStateToProps, { addNPCSafe })(SavedCharactersList);
