import React, { useState, useMemo } from 'react';
import { connect } from 'react-redux';
import { useTheme, useMediaQuery, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Typography, Menu, MenuItem } from '@material-ui/core';
import { People, Close, Send, MoreVert, Edit, HighlightOff, Fullscreen, FullscreenExit, TouchApp, Keyboard } from '@material-ui/icons';
import { State } from '../../redux/types';
import { EncounterState } from '../../redux/reducers/encounter';
import { resetEncounter, createEncounter, nextTurn, prevTurn } from '../../redux/actions/encounter';
import { closeErrorDialog } from '../../redux/actions/ui';
import { AnimatedImage } from '../AnimatedImage';
import { DividedList } from '../DividedList';
import { EntityList } from '../EntityList';
import { Navbar } from '../Navbar';
import { NewEncBeyondCharactersList } from '../NewEncBeyondCharactersList';
import { NewEncCustomCharactersList } from '../NewEncCustomCharactersList';
import { Notes } from '../Notes';
import { Numpad } from '../Numpad';
import { SavedBeyondCharactersList } from '../SavedBeyondCharactersList';
import { SavedCustomCharactersList } from '../SavedCustomCharactersList';
import { TextNotes } from '../TextNotes';
import { Tooltip } from '../Tooltip';
import { RootComponentContainer, RootComponentWrapper, ContentContainer, ListAndNumpadContainer, NotesContainer } from './style';

export interface StateProps {
    isErrorDialogOpen: boolean;
    errorMessage?: JSX.Element;
    encounter: EncounterState | null;
    hasBeyondCharacters?: boolean;
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
    hasBeyondCharacters,
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

    const [isSavedCharactersDialogOpen, setIsSavedCharactersDialogOpen] = useState(false);
    const [isNewEncounterDialogOpen, setIsNewEncounterDialogOpen] = useState(false);

    const [isCreatingNewEncounter, setIsCreatingNewEncounter] = useState(false);
    const [isKeyboardMode, setIsKeyboardMode] = useState(false);

    const canNewEncounterBeCreated = useMemo(() => {
        if (!encounter) {
            return false;
        }

        const { beyondCharacters, customCharacters, initiativeById } = encounter;
        const allBeyondHaveInitiative = Object.keys(beyondCharacters).every(id => Object.keys(initiativeById).some(id2 => id === id2));
        const allCustomHaveInitiative = Object.keys(customCharacters).every(id => Object.keys(initiativeById).some(id2 => id === id2));

        return allBeyondHaveInitiative && allCustomHaveInitiative && Object.keys(initiativeById).length > 0;
    }, [encounter]);

    const currentBackgroundUrl = useMemo(() => {
        if (!encounter) {
            return undefined;
        }

        const { beyondCharacters, currentTurnKey } = encounter;
        const currentBeyondCharacter = beyondCharacters[currentTurnKey];
        if (currentBeyondCharacter) {
            return currentBeyondCharacter.defaultBackdrop.largeBackdropAvatarUrl;
        }

        return undefined;
    }, [encounter]);

    const toggleFullscreen = () => {
        const isFullscreen = document.fullscreenElement !== null;
        if (isFullscreen) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        } else {
            const element = document.documentElement;
            if (element.requestFullscreen) {
                element.requestFullscreen();
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

    const openBeyondCharacterDialog = () => setIsSavedCharactersDialogOpen(true);
    const closeBeyondCharacterDialog = () => setIsSavedCharactersDialogOpen(false);

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

    const isFullscreen = document.fullscreenElement !== null;

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
                <MenuItem onClick={() => { openBeyondCharacterDialog(); closeMenu(); }}>
                    <People color="secondary" style={{ marginRight: '16px' }} /> Saved characters
                </MenuItem>
                <MenuItem onClick={() => { openNewEncounterDialog(); closeMenu(); }}>
                    <Edit color="secondary" style={{ marginRight: '16px' }} /> {!!encounter && encounter.currentId === 1 ? 'Create new encounter' : 'Edit current encounter'}
                </MenuItem>
                <MenuItem onClick={() => { resetEncounter(); closeMenu(); }} disabled={!!encounter && encounter.currentId === 1}>
                    <HighlightOff color="secondary" style={{ marginRight: '16px' }} /> Clear current encounter
                </MenuItem>
                <MenuItem onClick={() => { toggleFullscreen(); closeMenu(); }}>
                    {isFullscreen ? <FullscreenExit color="secondary" style={{ marginRight: '16px' }} /> : <Fullscreen color="secondary" style={{ marginRight: '16px' }} />} Toggle fullscreen
                </MenuItem>
                {small ? null : (
                    <MenuItem onClick={toggleInputMode}>
                        {isKeyboardMode ? <TouchApp color="secondary" style={{ marginRight: '16px' }} /> : <Keyboard color="secondary" style={{ marginRight: '16px' }} />} 
                        {isKeyboardMode ? 'Enable touchscreen mode' : 'Enable keyboard mode'}
                    </MenuItem>
                )}
            </Menu>
            <RootComponentWrapper>
                <ContentContainer small={small}>
                    {(encounter && encounter.currentId > 1)
                        ? (
                            small ? (
                                <React.Fragment>
                                    <EntityList fullWidth fullScreen={isFullscreen} />
                                    <NotesContainer>
                                        <TextNotes fullWidth rows={isFullscreen ? '4' : '2'} />
                                    </NotesContainer>
                                </React.Fragment>
                            ) : (
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
                        )
                        : (
                            <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingTop: '32px' }}>
                                <Typography variant="h5">Create a new encounter to begin</Typography>
                            </div>
                        )
                    }
                </ContentContainer>
            </RootComponentWrapper>
            <Dialog fullScreen open={isSavedCharactersDialogOpen} onClose={closeBeyondCharacterDialog}>
                <Navbar color="primary">
                    <IconButton color="inherit" onClick={closeBeyondCharacterDialog}>
                        <Close />
                    </IconButton>
                    <Typography variant="h6" style={{ marginLeft: '8px' }}>
                        Saved Characters
                    </Typography>
                </Navbar>
                <DialogContent>
                    <DividedList titles={(hasBeyondCharacters || navigator.onLine) ? ['D&D Beyond Characters', 'Custom Characters'] : ['Custom Characters']} marginBottomOverride="60">
                        {(hasBeyondCharacters || navigator.onLine) ? <SavedBeyondCharactersList /> : null}
                        <SavedCustomCharactersList />
                    </DividedList>
                </DialogContent>
            </Dialog>
            <Dialog maxWidth="lg" fullScreen={small} open={isNewEncounterDialogOpen}>
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
                    <DividedList titles={hasBeyondCharacters ? ['D&D Beyond Characters', 'Custom Characters'] : ['Custom Characters']}>
                        {hasBeyondCharacters ? <NewEncBeyondCharactersList /> : null}
                        <NewEncCustomCharactersList />
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
    hasBeyondCharacters: !!(state.beyondCharacters && state.beyondCharacters.length > 0),
});

export default connect(mapStateToProps, { closeErrorDialog, resetEncounter, createEncounter, nextTurn, prevTurn })(RootComponent);
