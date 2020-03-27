import React, { useState, useMemo, useEffect } from 'react';
import { connect } from 'react-redux';
import { useTheme, useMediaQuery, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Typography, Menu, MenuItem } from '@material-ui/core';
import { People, Close, Send, MoreVert, Edit, HighlightOff, Fullscreen, FullscreenExit, TouchApp, Keyboard } from '@material-ui/icons';
import { State } from '../../redux/types';
import { closeErrorDialog } from '../../redux/actions/ui';
import { Navbar } from '../Navbar';
import { Tooltip } from '../Tooltip';
import { EntityList } from '../EntityList';
import { Numpad } from '../Numpad';
import { Notes } from '../Notes';
import { RootComponentContainer, RootComponentWrapper, ContentContainer, ListAndNumpadContainer, NotesContainer } from './style';
import { DividedList } from '../DividedList';
import { SavedCharactersList } from '../SavedCharactersList';
import { SavedNPCsList } from '../SavedNPCsList';
import { NewEncCharactersList } from '../NewEncCharactersList';
import { NewEncNPCsList } from '../NewEncNPCsList';
import { resetEncounter, createEncounter, nextTurn, prevTurn } from '../../redux/actions/encounter';
import { EncounterState } from '../../redux/reducers/encounter';
import { TextNotes } from '../TextNotes';
import { AnimatedImage } from '../AnimatedImage';

export interface StateProps {
    isErrorDialogOpen: boolean;
    errorMessage?: JSX.Element;
    encounter: EncounterState | null;
}

export interface DispatchProps {
    closeErrorDialog: typeof closeErrorDialog;
    resetEncounter: typeof resetEncounter;
    createEncounter: typeof createEncounter;
    nextTurn: typeof nextTurn;
    prevTurn: typeof prevTurn;
}

const RootComponent: React.FC<StateProps & DispatchProps> = ({
    isErrorDialogOpen,
    errorMessage,
    encounter,
    closeErrorDialog,
    resetEncounter,
    createEncounter,
    nextTurn,
    prevTurn,
}) => {
    const theme = useTheme();
    const small = useMediaQuery(theme.breakpoints.down('sm'));
    const short = useMediaQuery('(max-height: 830px)');

    const [menuAnchorElement, setMenuAnchorElement] = useState<HTMLElement | null>(null);

    const [isCharacterDialogOpen, setIsCharacterDialogOpen] = useState(false);
    const [isNewEncounterDialogOpen, setIsNewEncounterDialogOpen] = useState(false);
    const [isCreatingNewEncounter, setIsCreatingNewEncounter] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isKeyboardMode, setIsKeyboardMode] = useState(true);

    const canNewEncounterBeCreated = useMemo(() => {
        if (!encounter) {
            return false;
        }

        const { characters, npcs, initiativeById } = encounter;
        const allCharactersHaveInitiative = Object.keys(characters).every(id => Object.keys(initiativeById).some(id2 => id === id2));
        const allNpcsHaveInitiative = Object.keys(npcs).every(id => Object.keys(initiativeById).some(id2 => id === id2));

        return allCharactersHaveInitiative && allNpcsHaveInitiative && Object.keys(initiativeById).length > 0;
    }, [encounter]);

    const currentBackgroundUrl = useMemo(() => {
        if (!encounter) {
            return undefined;
        }

        const { characters, currentTurnKey } = encounter;
        const currentCharacter = characters[currentTurnKey];
        if (currentCharacter) {
            return currentCharacter.defaultBackdrop.largeBackdropAvatarUrl;
        }

        return undefined;
    }, [encounter]);

    const toggleFullscreen = () => {
        if (isFullscreen) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
                setIsFullscreen(false);
            }
        } else {
            const element = document.documentElement;
            if (element.requestFullscreen) {
                element.requestFullscreen();
                setIsFullscreen(true);
            }
        }
    };

    const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => setMenuAnchorElement(event.currentTarget);
    const closeMenu = () => setMenuAnchorElement(null);

    const toggleInputMode = () => {
        if (isKeyboardMode) {
            setIsKeyboardMode(false);
        } else {
            setIsKeyboardMode(true);
        }
    };

    const openCharacterDialog = () => setIsCharacterDialogOpen(true);
    const closeCharacterDialog = () => setIsCharacterDialogOpen(false);

    const openNewEncounterDialog = () => {
        if (!!encounter && encounter.currentId === 1) {
            setIsCreatingNewEncounter(true);
        } else {
            setIsCreatingNewEncounter(false);
        }
        setIsNewEncounterDialogOpen(true);
    };
    const closeNewEncounterDialog = () => setIsNewEncounterDialogOpen(false);

    const handleNewEncounterCancel = () => {
        closeNewEncounterDialog();
        if (isCreatingNewEncounter) {
            resetEncounter();
        }
    };

    const handleNewEncounterOk = () => {
        closeNewEncounterDialog();
        if (isCreatingNewEncounter) {
            createEncounter();
        }
    };

    return (
        <RootComponentContainer>
            {small ? null : <AnimatedImage src={currentBackgroundUrl} />}
            <Navbar>
                <IconButton color="inherit" onClick={openMenu}>
                    <MoreVert />
                </IconButton>
                {(encounter && encounter.currentId > 1) ? (
                    <React.Fragment>
                        <Typography variant="h5">Round {encounter.currentRound}</Typography>
                        <div style={{ flex: '1' }} />
                        <Tooltip title="Previous turn">
                            <IconButton color="inherit" onClick={prevTurn}>
                                <Send style={{ transform: 'rotateY(180deg)', opacity: '0.7' }} />
                            </IconButton>
                        </Tooltip>
                        <Button disableElevation variant="contained" color="primary" endIcon={<Send />} onClick={nextTurn}>Next turn</Button>
                    </React.Fragment>
                ) : (
                    <Typography variant="h5">No encounter</Typography>
                )}
            </Navbar>
            <Menu anchorEl={menuAnchorElement} open={!!menuAnchorElement} onClose={closeMenu}>
                <MenuItem onClick={() => { openCharacterDialog(); closeMenu(); }}>
                    <People color="secondary" style={{ marginRight: '16px' }} /> Saved characters
                </MenuItem>
                <MenuItem onClick={() => { openNewEncounterDialog(); closeMenu(); }}>
                    <Edit color="secondary" style={{ marginRight: '16px' }} /> {!!encounter && encounter.currentId === 1 ? 'Create new encounter' : 'Edit current encounter'}
                </MenuItem>
                <MenuItem onClick={() => { resetEncounter(); closeMenu(); }} disabled={!!encounter && encounter.currentId === 1}>
                    <HighlightOff color="secondary" style={{ marginRight: '16px' }} /> Clear current encounter
                </MenuItem>
                <MenuItem onClick={toggleFullscreen}>
                    {isFullscreen ? <FullscreenExit color="secondary" style={{ marginRight: '16px' }} /> : <Fullscreen color="secondary" style={{ marginRight: '16px' }} />} Toggle fullscreen
                </MenuItem>
                <MenuItem onClick={toggleInputMode}>
                    {isKeyboardMode ? <TouchApp color="secondary" style={{ marginRight: '16px' }} /> : <Keyboard color="secondary" style={{ marginRight: '16px' }} />} 
                    {isKeyboardMode ? 'Enable touchscreen mode' : 'Enable keyboard mode'}
                </MenuItem>
            </Menu>
            <RootComponentWrapper>
                <ContentContainer small={small}>
                    {small
                        ? (
                            <React.Fragment>
                                <EntityList fullScreen />
                                <NotesContainer>
                                    <TextNotes fullWidth rows={isFullscreen ? '4' : '2'} />
                                </NotesContainer>
                            </React.Fragment>
                        )
                        : (
                            <React.Fragment>
                                <ListAndNumpadContainer>
                                    <EntityList short={short} />
                                    {isKeyboardMode ? null : <Numpad short={short} />}
                                </ListAndNumpadContainer>
                                <NotesContainer>
                                    {isKeyboardMode
                                        ? <TextNotes rows="8" />
                                        : <Notes short={short} />
                                    }
                                </NotesContainer>
                            </React.Fragment>
                        )
                    }
                </ContentContainer>
            </RootComponentWrapper>
            <Dialog fullScreen open={isCharacterDialogOpen} onClose={closeCharacterDialog}>
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
            <Dialog maxWidth="lg" fullWidth={!small} fullScreen={small} open={isNewEncounterDialogOpen}>
                {small ? (
                    <Navbar color="primary">
                        <Typography variant="h6" style={{ marginLeft: '16px' }}>
                            {isCreatingNewEncounter ? 'New encounter' : 'Edit encounter'}
                        </Typography>
                    </Navbar>
                ) : (
                    <DialogTitle>
                        {isCreatingNewEncounter ? 'New encounter' : 'Edit encounter'}
                    </DialogTitle>
                )}
                <DialogContent>
                    <DividedList titles={['Characters', 'NPCs']}>
                        <NewEncCharactersList />
                        <NewEncNPCsList />
                    </DividedList>
                </DialogContent>
                <DialogActions>
                    <Button color="secondary" onClick={handleNewEncounterCancel}>Cancel</Button>
                    <Button disabled={!canNewEncounterBeCreated} variant="contained" color="primary" onClick={handleNewEncounterOk}>OK</Button>
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
    isErrorDialogOpen: (state.ui && state.ui.errorDialog.isOpen) || false,
    errorMessage: state.ui && state.ui.errorDialog.message,
    encounter: state.encounter || null,
});

export default connect(mapStateToProps, { closeErrorDialog, resetEncounter, createEncounter, nextTurn, prevTurn })(RootComponent);
