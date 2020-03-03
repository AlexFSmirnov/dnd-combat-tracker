import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { SavedCharactersList } from '../SavedCharactersList';
import { SavedNPCsList } from '../SavedNPCsList';
import { CharacterDialogContentContainer, CharacterDialogContentWrapper, Divider } from './style';

const CharacterDialogContent = () => {
    const theme = useTheme();
    const small = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <CharacterDialogContentContainer small={small}>
            <CharacterDialogContentWrapper small={small}>
                <SavedCharactersList small={small} />
                <Divider color={theme.palette.secondary.main} small={small} />
                <SavedNPCsList small={small} />
            </CharacterDialogContentWrapper>
        </CharacterDialogContentContainer>
    );
};

export default CharacterDialogContent;
