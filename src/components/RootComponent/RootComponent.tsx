import React, { useState} from 'react';
import { connect } from 'react-redux';
import { IconButton, Dialog, Typography } from '@material-ui/core';
import { People, Close } from '@material-ui/icons';
import { State } from '../../redux/types';
import { Navbar } from '../Navbar';
import { Tooltip } from '../Tooltip';
import { EntityList } from '../EntityList';
import { Numpad } from '../Numpad';
import { Notes } from '../Notes';
import { RootComponentContainer, RootComponentWrapper, ContentContainer, ListAndNumpadContainer, NotesContainer } from './style';
import { CharacterDialogContent } from '../CharacterDialogContent';

export interface StateProps {
    currentBackgroundUrl?: string;
}

const RootComponent: React.FC<StateProps> = ({ currentBackgroundUrl }) => {
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
        </RootComponentContainer>
    );
};

const mapStateToProps = (state: State) => ({
    currentBackgroundUrl: state.characters && state.characters[1] && state.characters[1].defaultBackdrop.largeBackdropAvatarUrl,
});

export default connect(mapStateToProps)(RootComponent);
