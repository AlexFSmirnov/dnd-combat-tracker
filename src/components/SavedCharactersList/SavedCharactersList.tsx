import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField, Button, Typography } from '@material-ui/core';
import { addCharacterByUrl } from '../../redux/actions/characters';
import { State, Character } from '../../redux/types';
import { SavedCharacterListItem } from '../SavedCharacterListItem';

interface StateProps {
    characters: Character[];
}

interface DispatchProps {
    addCharacterByUrl: (url: string, maxHitPoints: number) => void;
}

export interface SavedCharactersListProps {
    small?: boolean;
}

const SavedCharactersList: React.FC<SavedCharactersListProps & StateProps & DispatchProps> = ({ small, characters, addCharacterByUrl }) => {
    const [isNewCharacterDialogOpen, setIsNewCharacterDailogOpen] = useState<boolean>(false);
    const [characterURL, setCharacterURL] = useState<string>('');
    const [characterMaxHitPoints, setCharacterMaxHitPoints] = useState<string>('');

    const openNewCharacterDialog = () => setIsNewCharacterDailogOpen(true);
    const closeNewCharacterDialog = () => setIsNewCharacterDailogOpen(false);

    const handleCharacterURLChange = (e: React.ChangeEvent<HTMLInputElement>) => setCharacterURL(e.target.value);
    const handleMaxHitPointsChange = (e: React.ChangeEvent<HTMLInputElement>) => setCharacterMaxHitPoints(e.target.value);

    const handleImportConfirmed = () => {
        closeNewCharacterDialog();
        addCharacterByUrl(characterURL, parseInt(characterMaxHitPoints) || 0);
        setCharacterURL('');
        setCharacterMaxHitPoints('');
    };

    return (
        <React.Fragment>
            <Typography variant="h5">Characters</Typography>
            {characters.length > 0
                ? (
                    characters.map(c => (
                        <SavedCharacterListItem key={c.id} character={c} />
                    ))
                )
                : (
                    <Typography variant="body1">Currently you don't have any saved characters.</Typography>
                )
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
                    <TextField autoFocus fullWidth margin="dense" label="Character URL" value={characterURL} onChange={handleCharacterURLChange} />
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
    characters: (state && state.characters) || [],
});

export default connect(mapStateToProps, { addCharacterByUrl })(SavedCharactersList);