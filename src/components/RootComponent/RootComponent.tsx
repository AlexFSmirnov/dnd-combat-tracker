import React, { useState} from 'react';
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
import { CharacterDialogContent } from '../CharacterDialogContent';

export interface StateProps {
    currentBackgroundUrl?: string;
    isErrorDialogOpen: boolean;
    errorMessage?: JSX.Element;
}

export interface DispatchProps {
    closeErrorDialog: typeof closeErrorDialog;
}

const RootComponent: React.FC<StateProps & DispatchProps> = ({ currentBackgroundUrl, isErrorDialogOpen, errorMessage, closeErrorDialog }) => {
    const [isCharacterDialogOpen, setIsCharacterDialogOpen] = useState<boolean>(false);

    const openCharacterDialog = () => setIsCharacterDialogOpen(true);
    const closeCharacterDialog = () => setIsCharacterDialogOpen(false);

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
                <CharacterDialogContent />
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
});

export default connect(mapStateToProps, { closeErrorDialog })(RootComponent);
