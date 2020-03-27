import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { TextField } from '@material-ui/core';
import { State } from '../../redux/types';
import { EncounterState } from '../../redux/reducers/encounter';
import { updateTextNotes } from '../../redux/actions/encounter';
import { SquareFrame } from '../Frame';
import { TextNotesContainer, TextNotesTextFieldWrapper } from './style';

interface StateProps {
    encounter: EncounterState | null;
}

interface DispatchProps {
    updateTextNotes: typeof updateTextNotes;
}

export interface TextNotesProps {
    rows: string;
    fullWidth?: boolean;
}

const TextNotes: React.FC<TextNotesProps & StateProps & DispatchProps> = ({ rows, fullWidth, encounter, updateTextNotes }) => {
    const notesValue = useMemo(() => {
        if (!encounter) {
            return '';
        }

        const key = encounter.selectedEntityKey || encounter.currentTurnKey;
        return encounter.textNotesByKey[key] || '';
    }, [encounter]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (encounter) {
            const key = encounter.selectedEntityKey || encounter.currentTurnKey;
            updateTextNotes(key, e.target.value);
        }
    };

    return (
        <TextNotesContainer rows={rows} fullWidth={fullWidth}>
            <TextNotesTextFieldWrapper>
                <TextField multiline rows={rows} style={{ width: '100%' }} value={notesValue} onChange={handleChange} />
            </TextNotesTextFieldWrapper>
            <SquareFrame forceUpdateProp={rows} />
        </TextNotesContainer>
    );
};

const mapStateToProps = (state: State) => ({
    encounter: state.encounter || null,
});

export default connect(mapStateToProps, { updateTextNotes })(TextNotes);
