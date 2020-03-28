import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useTheme, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField, Button, Typography } from '@material-ui/core';
import { addCustomCharacterSafe } from '../../redux/actions/customCharacters';
import { State, CustomCharacter } from '../../redux/types';
import { SavedCustomCharacterListItem } from '../SavedCustomCharacterListItem';
import { DefaultAvatarList, AvatarWrapper, Avatar } from './style';

const defaultAvatarSources = [
    `${process.env.PUBLIC_URL}/zombie.png`,
    `${process.env.PUBLIC_URL}/skeleton.png`,
    `${process.env.PUBLIC_URL}/devil.png`,
    `${process.env.PUBLIC_URL}/commoner.png`,
    `${process.env.PUBLIC_URL}/wizard.png`,
];

interface StateProps {
    characters: CustomCharacter[];
}

interface DispatchProps {
    addCustomCharacterSafe: (npc: CustomCharacter) => void;
}

const SavedCustomCharactersList: React.FC<StateProps & DispatchProps> = ({ characters, addCustomCharacterSafe }) => {
    const theme = useTheme();

    const [isNewCharacterDialogOpen, setIsNewCharacterDialogOpen] = useState<boolean>(false);
    const [characterName, setCharacterName] = useState<string>('');
    const [characterMaxHitPoints, setCharacterMaxHitPoints] = useState<string>('');
    const [characterAvtarUrl, setCharacterAvtarUrl] = useState<string>('');

    const openNewCharacterDialog = () => setIsNewCharacterDialogOpen(true);
    const closeNewCharacterDialog = () => setIsNewCharacterDialogOpen(false);

    const handleCharacterNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setCharacterName(e.target.value);
    const handleMaxHitPointsChange = (e: React.ChangeEvent<HTMLInputElement>) => setCharacterMaxHitPoints(e.target.value);
    const handleNpcAvatarUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => setCharacterAvtarUrl(e.target.value); 

    const handleNewCharacterConfirmed = () => {
        const maxHitPoints = parseInt(characterMaxHitPoints) || 0;
        addCustomCharacterSafe({ name: characterName, maxHitPoints, avatarUrl: characterAvtarUrl });

        closeNewCharacterDialog();
        setCharacterName('');
        setCharacterMaxHitPoints('');
        setCharacterAvtarUrl('');
    };

    return (
        <React.Fragment>
            {characters.length > 0
                ? characters.map(c => <SavedCustomCharacterListItem key={c.name} character={c} />)
                : <Typography variant="body1">Currently you don't have any saved custom characters.</Typography>
            }
            <Button variant="outlined" color="primary" onClick={openNewCharacterDialog}>Add Character</Button>
            <Dialog open={isNewCharacterDialogOpen} onClose={closeNewCharacterDialog}>
                <DialogTitle>Create new custom character</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Choose a name for your character and specify maximum hit points. Optionally, specify an avatar URL or pick one of the default avatars.
                        <br /> <br />
                        It is not possible to have several custom characters with the same name.
                    </DialogContentText>
                    <TextField autoFocus fullWidth margin="dense" label="Character Name" value={characterName} onChange={handleCharacterNameChange} />
                    <TextField fullWidth type="number" margin="dense" label="Max Hit Points" value={characterMaxHitPoints} onChange={handleMaxHitPointsChange} />
                    <TextField fullWidth margin="dense" label="Avatar URL" value={characterAvtarUrl} onChange={handleNpcAvatarUrlChange} />
                    <DefaultAvatarList>
                        {defaultAvatarSources.map(src => (
                            <AvatarWrapper key={src} onClick={() => setCharacterAvtarUrl(src)} color={theme.palette.primary.main} selected={src === characterAvtarUrl}>
                                <Avatar src={src} variant="rounded" />
                            </AvatarWrapper>
                        ))}
                    </DefaultAvatarList>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeNewCharacterDialog} color="secondary">Cancel</Button>
                    <Button onClick={handleNewCharacterConfirmed} color="primary" variant="contained" disabled={!characterName || !characterMaxHitPoints}>Create</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
};

const mapStateToProps = (state: State) => ({
    characters: state.customCharacters || [],
});

export default connect(mapStateToProps, { addCustomCharacterSafe })(SavedCustomCharactersList);
