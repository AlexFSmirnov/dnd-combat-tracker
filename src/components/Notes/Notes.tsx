import React, { useRef, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { State } from '../../redux/types';
import { updateImgNotes } from '../../redux/actions/encounter';
import { FancyFrame } from '../Frame';
import { NotesContainer, NotesCanvas } from './style';

interface StateProps {
    imageNotes: Record<number, string>;
    currentKey: number | null;
}

interface DispatchProps {
    updateImgNotes: typeof updateImgNotes;
}

export interface NotesProps {
    short?: boolean;
}

const Notes = ({ short, imageNotes, currentKey, updateImgNotes }: NotesProps & StateProps & DispatchProps) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const prevPointerPosition = useRef<{ x: number, y: number } | null>(null);
    const [prevKey, setPrevKey] = useState<number | null>(null);

    const [canvasSize, setCanvasSize] = useState<{ width?: number, height?: number }>({});

    useEffect(() => {
        window.addEventListener('resize', updateCanvasSize);
        return () => window.removeEventListener('resize', updateCanvasSize);
    }, []);

    useEffect(() => {
        updateCanvasSize();
    }, [canvasRef]);

    useEffect(() => {
        if (!prevKey) {
            setPrevKey(currentKey);
            loadNote();
            return;
        }

        const { current: canvas } = canvasRef;
        if (canvas) {
            updateImgNotes(prevKey, canvas.toDataURL());
            loadNote();
        }

        setPrevKey(currentKey);
    }, [currentKey]);

    const loadNote = () => {
        if (currentKey) {
            const note = imageNotes[currentKey];
            const { current: canvas } = canvasRef;
            if (canvas) {
                canvas.getContext('2d')?.clearRect(0, 0, 100000, 100000);
                if (note) {
                    var img = new window.Image();
                    img.addEventListener('load', () => {
                        canvas.getContext('2d')?.drawImage(img, 0, 0);
                    });
                    img.setAttribute('src', note);
                }
            }
        }
    };

    const updateCanvasSize = () => {
        const { current: canvas } = canvasRef;
        if (canvas) {
            const { width, height } = canvas.getBoundingClientRect();
            setCanvasSize({ width, height });
        }
    };

    const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
        const { current: canvas } = canvasRef;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            if (ctx) {
                const { pressure, buttons, clientX, clientY } = e;
                const x = clientX - canvas.getBoundingClientRect().x;
                const y = clientY - canvas.getBoundingClientRect().y;
                const lineThickness = pressure || 1;

                if (!pressure || !buttons) {
                    prevPointerPosition.current = null;
                    return;
                } 

                if (prevPointerPosition.current) {
                    ctx.beginPath();
                    ctx.moveTo(prevPointerPosition.current.x, prevPointerPosition.current.y);
                    ctx.lineTo(x, y);
                    ctx.lineWidth = lineThickness * 2;
                    ctx.stroke();
                }

                prevPointerPosition.current = { x, y };
            }
        }
    };

    const handlePointerUp = () => (prevPointerPosition.current = null);

    const canvasProps = {
        ref: canvasRef,
        onPointerMove: handlePointerMove,
        onPointerUp: handlePointerUp,
        ...canvasSize,
    };

    return (
        <NotesContainer short={short}>
            <NotesCanvas {...canvasProps}></NotesCanvas>
            <FancyFrame forceUpdateProp={short} />
        </NotesContainer>
    );
};

const mapStateToProps = (state: State) => ({
    imageNotes: (state.encounter && state.encounter.imgNotesByKey) || {},
    currentKey: (state.encounter && (state.encounter.selectedEntityKey || state.encounter.currentTurnKey)) || null,
});

export default connect(mapStateToProps, { updateImgNotes })(Notes);
