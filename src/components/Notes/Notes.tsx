import React from 'react';
import { FancyFrame } from '../Frame';
import { NotesContainer, NotesWrapper } from './style';

const Notes = () => {

    return (
        <NotesContainer>
            <NotesWrapper>
                I'm a note
            </NotesWrapper>
            <FancyFrame />
        </NotesContainer>
    );
};

export default Notes;
