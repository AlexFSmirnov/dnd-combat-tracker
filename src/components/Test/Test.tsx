import React from 'react';
import { connect } from 'react-redux';
import { State } from '../../redux/types';
import { addCharacterToEncounter, addNPCToEncounter } from '../../redux/actions/encounter';

// @ts-ignore
const Test = ({ characters, npcs, encounter, addCharacterToEncounter, addNPCToEncounter }) => {
    console.log(encounter);

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ padding: '16px', border: '1px solid black', display: 'flex', flexDirection: 'column' }}>
                {characters.map((c: any) => (
                    <div key={c.name} onClick={() => addCharacterToEncounter(c)}>{c.name}</div>
                ))}
                {npcs.map((c: any) => (
                    <div key={c.name} onClick={() => addNPCToEncounter(c)}>{c.name}</div>
                ))}
            </div>
            <div style={{ padding: '16px', border: '1px solid red', display: 'flex', flexDirection: 'column' }}>
                {Object.keys(encounter.characters).map(id => (
                    <div key={encounter.characters[id].name + id}>{encounter.characters[id].name} - {id}</div>
                ))}
                {Object.keys(encounter.npcs).map(id => (
                    <div key={encounter.npcs[id].name + id}>{encounter.npcs[id].name} - {id}</div>
                ))}
            </div>
        </div>
    );
};

const mapStateToProps = (state: State) => ({
    characters: (state && state.characters) || [],
    npcs: (state && state.npcs) || [],
    encounter: (state && state.encounter) || [],
});

export default connect(mapStateToProps, { addCharacterToEncounter, addNPCToEncounter })(Test);
