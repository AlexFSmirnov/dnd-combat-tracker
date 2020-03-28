import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField, Button, Typography } from '@material-ui/core';
import { addBeyondCharacterByUrl } from '../../redux/actions/beyondCharacters';
import { State, BeyondCharacter } from '../../redux/types';
import { SavedBeyondCharacterListItem } from '../SavedBeyondCharacterListItem';

interface StateProps {
    characters: BeyondCharacter[];
}

interface DispatchProps {
    addBeyondCharacterByUrl: (url: string, maxHitPoints: number) => void;
}

const SavedBeyondCharactersList: React.FC<StateProps & DispatchProps> = ({ characters, addBeyondCharacterByUrl }) => {
    const [isNewCharacterDialogOpen, setIsNewCharacterDailogOpen] = useState<boolean>(false);
    const [characterURL, setCharacterURL] = useState<string>('');
    const [characterMaxHitPoints, setCharacterMaxHitPoints] = useState<string>('');

    const openNewCharacterDialog = () => setIsNewCharacterDailogOpen(true);
    const closeNewCharacterDialog = () => setIsNewCharacterDailogOpen(false);

    const handleURLChange = (e: React.ChangeEvent<HTMLInputElement>) => setCharacterURL(e.target.value);
    const handleMaxHitPointsChange = (e: React.ChangeEvent<HTMLInputElement>) => setCharacterMaxHitPoints(e.target.value);

    const handleImportConfirmed = () => {
        closeNewCharacterDialog();
        addBeyondCharacterByUrl(characterURL, parseInt(characterMaxHitPoints) || 0);
        setCharacterURL('');
        setCharacterMaxHitPoints('');
    };

    return (
        <React.Fragment>
            {characters.length > 0
                ? characters.map(c => <SavedBeyondCharacterListItem key={c.id} character={c} />)
                : <Typography variant="body1">Currently you don't have any imported D&D Beyond characters.</Typography>
            }
            <Button variant="outlined" color="primary" onClick={openNewCharacterDialog}>Add character</Button>
            <Dialog open={isNewCharacterDialogOpen} onClose={closeNewCharacterDialog}>
                <DialogTitle>Import new character from D&D Beyond</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Paste a link to the character you want to add in the input field below. Make sure the character privacy is set to "Public", otherwise it will not be imported.
                        <br /> <br />
                        Optionally, specify character's maximum hit points. You will be able to change them later.
                    </DialogContentText>
                    <TextField autoFocus fullWidth margin="dense" label="Character URL" value={characterURL} onChange={handleURLChange} />
                    <TextField fullWidth type="number" margin="dense" label="Max Hit Points" value={characterMaxHitPoints} onChange={handleMaxHitPointsChange} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeNewCharacterDialog} color="secondary">Cancel</Button>
                    <Button onClick={handleImportConfirmed} color="primary" variant="contained" disabled={!characterURL}>Import</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
};

const mapStateToProps = (state: State) => ({
    characters: (state && state.beyondCharacters) || [],
});

export default connect(mapStateToProps, { addBeyondCharacterByUrl })(SavedBeyondCharactersList);
