import React, { useState, useMemo} from 'react';
import { connect } from 'react-redux';
import { IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Typography } from '@material-ui/core';
import { People, Close } from '@material-ui/icons';
import { State } from '../../redux/types';
import { closeErrorDialog } from '../../redux/actions/ui';
import { Navbar } from '../Navbar';
import { Tooltip } from '../Tooltip';
import { EntityList } from '../EntityList';
import { Numpad } from '../Numpad';
import { Notes } from '../Notes';
import { RootComponentContainer, RootComponentWrapper, ContentContainer, ListAndNumpadContainer, NotesContainer } from './style';
import { NewEncounterDialogContent } from '../NewEncounterDialogContent';
import { DividedList } from '../DividedList';
import { SavedCharactersList } from '../SavedCharactersList';
import { SavedNPCsList } from '../SavedNPCsList';
import { NewEncCharactersList } from '../NewEncCharactersList';
import { NewEncNPCsList } from '../NewEncNPCsList';
import { resetEncounter } from '../../redux/actions/encounter';
import { EncounterState } from '../../redux/reducers/encounter';

export interface StateProps {
    currentBackgroundUrl?: string;
    isErrorDialogOpen: boolean;
    errorMessage?: JSX.Element;
    encounter: EncounterState | null;
}

export interface DispatchProps {
    closeErrorDialog: typeof closeErrorDialog;
    resetEncounter: typeof resetEncounter;
}

const RootComponent: React.FC<StateProps & DispatchProps> = ({ currentBackgroundUrl, isErrorDialogOpen, errorMessage, encounter, closeErrorDialog, resetEncounter }) => {
    const [isCharacterDialogOpen, setIsCharacterDialogOpen] = useState(false);
    const [isNewEncounterDialogOpen, setIsNewEncounterDialogOpen] = useState(false);

    const canNewEncounterBeCreated = useMemo(() => {
        if (!encounter) {
            return false;
        }

        const { characters, npcs, initiativeById } = encounter;
        const allCharactersHaveInitiative = Object.keys(characters).every(id => Object.keys(initiativeById).some(id2 => id === id2));
        const allNpcsHaveInitiative = Object.keys(npcs).every(id => Object.keys(initiativeById).some(id2 => id === id2));

        return allCharactersHaveInitiative && allNpcsHaveInitiative && Object.keys(initiativeById).length > 0;
    }, [encounter]);

    const openCharacterDialog = () => setIsCharacterDialogOpen(true);
    const closeCharacterDialog = () => setIsCharacterDialogOpen(false);

    const handleNewEncounterCancel = () => {
        setIsNewEncounterDialogOpen(false);
        resetEncounter();
    };

    const handleNewEncounterCreated = () => {
        setIsNewEncounterDialogOpen(false);
    };

    return (
        <RootComponentContainer backgroundImageSrc={currentBackgroundUrl}>
            <Navbar>
                <Tooltip title="View and edit saved characters">
                    <IconButton color="inherit" onClick={openCharacterDialog}>
                        <People />
                    </IconButton>
                </Tooltip>
            </Navbar>
            <RootComponentWrapper>
                <ContentContainer>
                    <ListAndNumpadContainer>
                        <EntityList />
                        <Numpad />
                    </ListAndNumpadContainer>
                    <NotesContainer>
                        <Notes />
                    </NotesContainer>
                </ContentContainer>
            </RootComponentWrapper>
            <Dialog fullScreen open={!!isCharacterDialogOpen} onClose={closeCharacterDialog}>
                <Navbar color="primary">
                    <IconButton color="inherit" onClick={closeCharacterDialog}>
                        <Close />
                    </IconButton>
                    <Typography variant="h6" style={{ marginLeft: '8px' }}>
                        Saved Characters
                    </Typography>
                </Navbar>
                <DividedList titles={['Characters', 'NPCs']} marginBottomOverride="60">
                    <SavedCharactersList />
                    <SavedNPCsList />
                </DividedList>
            </Dialog>
            <Dialog maxWidth="lg" fullWidth open={isNewEncounterDialogOpen}>
                <DialogTitle>New Encounter</DialogTitle>
                <DialogContent>
                    <DividedList titles={['Characters', 'NPCs']}>
                        <NewEncCharactersList />
                        <NewEncNPCsList />
                    </DividedList>
                </DialogContent>
                <DialogActions>
                    <Button color="secondary" onClick={handleNewEncounterCancel}>Cancel</Button>
                    <Button disabled={!canNewEncounterBeCreated} variant="contained" color="primary" onClick={handleNewEncounterCreated}>Create</Button>
                </DialogActions>
            </Dialog>
            <Dialog open={isErrorDialogOpen} onClose={closeErrorDialog}>
                <DialogTitle>Error</DialogTitle>
                <DialogContent>
                    {errorMessage ? <DialogContentText>{errorMessage}</DialogContentText> : null}
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="primary" onClick={closeErrorDialog}>OK</Button>
                </DialogActions>
            </Dialog>
        </RootComponentContainer>
    );
};

const mapStateToProps = (state: State) => ({
    currentBackgroundUrl: state.characters && state.characters[1] && state.characters[1].defaultBackdrop.largeBackdropAvatarUrl,
    isErrorDialogOpen: (state.ui && state.ui.errorDialog.isOpen) || false,
    errorMessage: state.ui && state.ui.errorDialog.message,
    encounter: state.encounter || null,
});

export default connect(mapStateToProps, { closeErrorDialog, resetEncounter })(RootComponent);
