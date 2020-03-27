import styled from 'styled-components';

export const NotesContainer = styled.div<{ short?: boolean }>`
    position: relative;
    width: ${props => props.short ? 885 : 920}px;
    height: ${props => props.short ? 220 : 260}px;
    margin-top: 16px;
`;

export const NotesCanvas = styled.canvas`
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 24px);
    height: calc(100% - 16px);
    margin: 8px 12px;
    touch-action: none;
`;
