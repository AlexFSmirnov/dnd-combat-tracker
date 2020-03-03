import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField, Button } from '@material-ui/core';
import { addCharacterByUrl } from '../../redux/actions/characters';
import { State, Character } from '../../redux/types';
import { SavedCharacterListItem } from '../SavedCharacterListItem';
import { SavedCharactersListContainer } from './style';

interface StateProps {
    characters: Character[];
}

interface DispatchProps {
    addCharacterByUrl: (url: string, maxHitPoints: number) => void;
}

export interface SavedCharactersListProps {

}

const SavedCharactersList: React.FC<SavedCharactersListProps & StateProps & DispatchProps> = ({ characters, addCharacterByUrl }) => {
    const [isNewCharacterDialogOpen, setIsNewCharacterDailogOpen] = useState<boolean>(false);
    const [characterURL, setCharacterURL] = useState<string>('');
    const [characterMaxHitPoints, setCharacterMaxHitPoints] = useState<string>('');

    const openNewCharacterDialog = () => setIsNewCharacterDailogOpen(true);
    const closeNewCharacterDialog = () => setIsNewCharacterDailogOpen(false);

    const handleCharacterURLChange = (e: React.ChangeEvent<HTMLInputElement>) => setCharacterURL(e.target.value);
    const handleMaxHitPointsChange = (e: React.ChangeEvent<HTMLInputElement>) => setCharacterMaxHitPoints(e.target.value);

    const handleImportConfirmed = () => {
        closeNewCharacterDialog();
        setCharacterURL('');
        addCharacterByUrl(characterURL, parseInt(characterMaxHitPoints) || 0);
    };

    return (
        <SavedCharactersListContainer>
            {characters.map(c => (
                <SavedCharacterListItem key={c.id} character={c} />
            ))}
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
                    <TextField fullWidth margin="dense" label="Max Hit Points" value={characterMaxHitPoints} onChange={handleMaxHitPointsChange} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeNewCharacterDialog} color="secondary">Cancel</Button>
                    <Button onClick={handleImportConfirmed} color="primary" variant="contained" disabled={!characterURL}>Import</Button>
                </DialogActions>
            </Dialog>
        </SavedCharactersListContainer>
    );
};

const mapStateToProps = (state: State) => ({
    characters: (state && state.characters) || [],
});

export default connect(mapStateToProps, { addCharacterByUrl })(SavedCharactersList);
