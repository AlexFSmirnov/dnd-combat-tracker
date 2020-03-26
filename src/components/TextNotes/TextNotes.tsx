import React from 'react';
import { TextField } from '@material-ui/core';
import { SquareFrame } from '../Frame';
import { TextNotesContainer, TextNotesTextFieldWrapper } from './style';

const TextNotes = () => {
    return (
        <TextNotesContainer>
            <TextNotesTextFieldWrapper>
                <TextField multiline rows="5" style={{ width: '100%' }} />
            </TextNotesTextFieldWrapper>
            <SquareFrame />
        </TextNotesContainer>
    );
};

export default TextNotes;
