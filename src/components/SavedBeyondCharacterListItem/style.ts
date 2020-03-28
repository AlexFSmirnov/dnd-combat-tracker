import styled from 'styled-components';
import { Toolbar } from '@material-ui/core';

export const SavedBeyondCharacterListItemContainer = styled(Toolbar)`
    && {
        padding: 0 12px;
        min-height: 56px;
        height: 56px;
    }

    & > :not(:last-child) {
        margin-right: 16px;
    }
`;

export const Grow = styled.div`
    flex-grow: 1;
`;
