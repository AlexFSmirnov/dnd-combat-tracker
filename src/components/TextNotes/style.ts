import styled from 'styled-components';

export const TextNotesContainer = styled.div<{ rows: string; fullWidth?: boolean }>`
    position: relative;
    width: ${props => props.fullWidth ? '98vw' : '600px'};
    height: ${props => parseInt(props.rows) * 19 + 33}px;
    margin-top: 8px;
`;

export const TextNotesTextFieldWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 24px);
    height: calc(100% - 32px);
    margin: 12px 12px 20px 12px;
`;
