import React from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
import { State, NPC } from '../../redux/types';
import { NewEncNPCListItem } from '../NewEncNPCListItem';

interface StateProps {
    npcs: NPC[];
}

const NewEncNPCsList = ({ npcs }: StateProps) => {
    return (
        <React.Fragment>
            <Typography variant="h5">NPCs</Typography>
            {npcs.map(n => <NewEncNPCListItem key={n.name} npc={n} />)}
        </React.Fragment>
    );
};

const mapStateToProps = (state: State) => ({
    npcs: (state && state.npcs) || [],
});

export default connect(mapStateToProps)(NewEncNPCsList);
