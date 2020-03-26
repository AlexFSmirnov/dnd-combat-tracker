import React, { useState, useMemo} from 'react';
import { connect } from 'react-redux';
import { useTheme, useMediaQuery, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Typography, Menu, MenuItem } from '@material-ui/core';
import { People, Close, Send, MoreVert, Edit, HighlightOff } from '@material-ui/icons';
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
import { TextNotes } from '../TextNotes';

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
    const theme = useTheme();
    const small = useMediaQuery(theme.breakpoints.down('sm'));

    const [menuAnchorElement, setMenuAnchorElement] = useState<HTMLElement | null>(null);

    const [isCharacterDialogOpen, setIsCharacterDialogOpen] = useState(false);
    const [isNewEncounterDialogOpen, setIsNewEncounterDialogOpen] = useState(false);
    const [isCreatingNewEncounter, setIsCreatingNewEncounter] = useState(false);

    const canNewEncounterBeCreated = useMemo(() => {
        if (!encounter) {
            return false;
        }

        const { characters, npcs, initiativeById } = encounter;
        const allCharactersHaveInitiative = Object.keys(characters).every(id => Object.keys(initiativeById).some(id2 => id === id2));
        const allNpcsHaveInitiative = Object.keys(npcs).every(id => Object.keys(initiativeById).some(id2 => id === id2));

        return allCharactersHaveInitiative && allNpcsHaveInitiative && Object.keys(initiativeById).length > 0;
    }, [encounter]);

    const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => setMenuAnchorElement(event.currentTarget);
    const closeMenu = () => setMenuAnchorElement(null);

    const openCharacterDialog = () => setIsCharacterDialogOpen(true);
    const closeCharacterDialog = () => setIsCharacterDialogOpen(false);

    const openNewEncounterDialog = () => {
        if (!!encounter && encounter.currentId === 0) {
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
            setIsCreatingNewEncounter(false);
        }
    };

    return (
        <RootComponentContainer backgroundImageSrc={currentBackgroundUrl}>
            <Navbar>
                <Tooltip title="Previous turn">
                    <IconButton color="inherit">
                        <Send style={{ transform: 'rotateY(180deg)', opacity: '0.5' }} />
                    </IconButton>
                </Tooltip>
                <Button variant="contained" color="primary" endIcon={<Send />}>Next turn</Button>
                <div style={{ flex: '1' }} />
                <Typography variant="h5">Round 1</Typography>
                <div style={{ flex: '1' }} />
                {/* Trick to have the Round number aligned in the center correctly */}
                <Button variant="contained" color="primary" endIcon={<Send />} style={{ opacity: '0', pointerEvents: 'none' }}>Next turn</Button>
                <IconButton color="inherit" onClick={openMenu}>
                    <MoreVert />
                </IconButton>
            </Navbar>
            <Menu anchorEl={menuAnchorElement} open={!!menuAnchorElement} onClose={closeMenu}>
                <MenuItem onClick={() => { openCharacterDialog(); closeMenu(); }}>
                    <People color="secondary" style={{ marginRight: '16px' }} /> Saved characters
                </MenuItem>
                <MenuItem onClick={() => { openNewEncounterDialog(); closeMenu(); }}>
                    <Edit color="secondary" style={{ marginRight: '16px' }} /> {!!encounter && encounter.currentId === 0 ? 'Create new encounter' : 'Edit current encounter'}
                </MenuItem>
                <MenuItem onClick={() => { resetEncounter(); closeMenu(); }} disabled={!!encounter && encounter.currentId === 0}>
                    <HighlightOff color="secondary" style={{ marginRight: '16px' }} /> Clear current encounter
                </MenuItem>
            </Menu>
            <RootComponentWrapper>
                <ContentContainer small={small}>
                    {small
                        ? (
                            <React.Fragment>
                                <EntityList fullScreen />
                                <NotesContainer>
                                    <TextNotes />
                                </NotesContainer>
                            </React.Fragment>
                        )
                        : (
                            <React.Fragment>
                                <ListAndNumpadContainer>
                                    <EntityList />
                                    <Numpad />
                                </ListAndNumpadContainer>
                                <NotesContainer>
                                    <Notes />
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
                    <Button disabled={!canNewEncounterBeCreated} variant="contained" color="primary" onClick={closeNewEncounterDialog}>OK</Button>
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
