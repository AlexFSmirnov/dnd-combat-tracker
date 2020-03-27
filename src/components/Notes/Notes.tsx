import React, { useRef, useState, useEffect } from 'react';
import { FancyFrame } from '../Frame';
import { NotesContainer, NotesCanvas } from './style';

export interface NotesProps {
    short?: boolean;
}

const Notes = ({ short }: NotesProps) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const prevPointerPosition = useRef<{ x: number, y: number } | null>(null);

    const [canvasSize, setCanvasSize] = useState<{ width?: number, height?: number }>({});

    useEffect(() => {
        window.addEventListener('resize', updateCanvasSize);
        return () => window.removeEventListener('resize', updateCanvasSize);
    }, []);

    useEffect(() => {
        updateCanvasSize();
    }, [canvasRef]);

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

export default Notes;
