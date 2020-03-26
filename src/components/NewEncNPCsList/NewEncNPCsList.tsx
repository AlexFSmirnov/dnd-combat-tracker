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
            {npcs.length > 0
                ? npcs.map(n => <NewEncNPCListItem key={n.name} npc={n} />)
                : <Typography variant="body1">Currently you don't have any saved NPCs.</Typography>
            }
        </React.Fragment>
    );
};

const mapStateToProps = (state: State) => ({
    npcs: (state && state.npcs) || [],
});

export default connect(mapStateToProps)(NewEncNPCsList);
