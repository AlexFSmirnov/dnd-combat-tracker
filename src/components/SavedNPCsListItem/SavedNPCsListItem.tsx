import React from 'react';
import { NPC } from '../../redux/types';

export interface SavedNPCsListItemProps {
    npc: NPC;
}

const SavedNPCsListItem: React.FC<SavedNPCsListItemProps> = ({ npc }) => {
    return (
        <p> {`${npc.name}  ${npc.maxHitPoints}  ${npc.avatarUrl}`} </p>
    );
};

export default SavedNPCsListItem;
