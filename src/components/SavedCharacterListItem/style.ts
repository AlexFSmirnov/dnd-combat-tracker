import styled from 'styled-components';
import { Toolbar } from '@material-ui/core';

export const SavedCharacterListItemContainer = styled(Toolbar)`
    && {
        padding: 0 12px;
    }

    & > :not(:last-child) {
        margin-right: 16px;
    }
`;

export const SavedCharacterListItemWrapper = styled.div`
`;

export const Grow = styled.div`
    flex-grow: 1;
`;
