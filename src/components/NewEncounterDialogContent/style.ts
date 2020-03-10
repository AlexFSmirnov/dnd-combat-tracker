import styled from 'styled-components';

export interface NewEncounterDialogContentWrapperProps {
    small?: boolean;
}

export const NewEncounterDialogContentWrapper = styled.div<NewEncounterDialogContentWrapperProps>`
    width: 100%;
    height: 100%;
    display: flex;
    ${props => props.small && 'flex-direction: column;'}
`;
