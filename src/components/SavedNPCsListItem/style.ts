import styled from 'styled-components';
import { Toolbar } from '@material-ui/core';

export const SavedNPCListItemContainer = styled(Toolbar)`
    && {
        padding: 0 12px;
    }

    & > :first-child {
        margin-right: 16px;
    }
`;

export const Grow = styled.div`
    flex-grow: 1;
`;
