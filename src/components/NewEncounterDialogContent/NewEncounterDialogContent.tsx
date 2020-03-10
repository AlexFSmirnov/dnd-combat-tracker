import React from 'react';
import { connect } from 'react-redux';
import { useTheme, useMediaQuery } from '@material-ui/core';
import { State, Character, NPC } from '../../redux/types';
import { addCharacterToEncounter, addNPCToEncounter } from '../../redux/actions/encounter';
import { NewEncounterDialogContentWrapper } from './style';
import { NewEncCharacterListItem } from '../NewEncCharacterListItem';
import { NewEncNPCListItem } from '../NewEncNPCListItem';

// @ts-ignore
const NewEncounterDialogContent = ({ characters, npcs, encounter, addCharacterToEncounter, addNPCToEncounter }) => {
    console.log(encounter);
    const theme = useTheme();
    const small = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <NewEncounterDialogContentWrapper small={small}>
            <div style={{ display: 'flex', flexDirection: 'column', width: small ? '100%' : '40%' }}>
                {characters.map((c: Character) => (
                    <NewEncCharacterListItem character={c} />
                ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', width: small ? '100%' : '40%' }}>
                {npcs.map((n: NPC) => (
                    <NewEncNPCListItem npc={n} />
                ))}
            </div>
        </NewEncounterDialogContentWrapper>
    );
};
// <div style={{ display: 'flex' }}>
//     <div style={{ padding: '16px', border: '1px solid black', display: 'flex', flexDirection: 'column' }}>
//         {characters.map((c: any) => (
//             <div key={c.name} onClick={() => addCharacterToEncounter(c)}>{c.name}</div>
//         ))}
//         {npcs.map((c: any) => (
//             <div key={c.name} onClick={() => addNPCToEncounter(c)}>{c.name}</div>
//         ))}
//     </div>
//     <div style={{ padding: '16px', border: '1px solid red', display: 'flex', flexDirection: 'column' }}>
//         {Object.keys(encounter.characters).map(id => (
//             <div key={encounter.characters[id].name + id}>{encounter.characters[id].name} - {id}</div>
//         ))}
//         {Object.keys(encounter.npcs).map(id => (
//             <div key={encounter.npcs[id].name + id}>{encounter.npcs[id].name} - {id}</div>
//         ))}
//     </div>
// </div>

const mapStateToProps = (state: State) => ({
    characters: (state && state.characters) || [],
    npcs: (state && state.npcs) || [],
    encounter: (state && state.encounter) || [],
});

export default connect(mapStateToProps, { addCharacterToEncounter, addNPCToEncounter })(NewEncounterDialogContent);
