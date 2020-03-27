import React, { useState, useRef, useEffect } from 'react';
import { Image } from './style';

export interface AnimatedImageProps {
    src?: string;
    transitionDuration?: number;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({ src, transitionDuration = 100 }) => {
    const firstImageRef = useRef<HTMLDivElement | null>(null);
    const secondImageRef = useRef<HTMLDivElement | null>(null);

    const [opacity, setOpacity] = useState(1);
    const [firstImageSrc, setFirstImageSrc] = useState(src);
    const [secondImageSrc, setSecondImageSrc] = useState<string | undefined>(undefined);

    useEffect(() => {
        const { current: firstImage } = firstImageRef;
        const { current: secondImage } = secondImageRef;
        let timeoutId: number | null = null;
        if (firstImage && secondImage) {
            firstImage.style.transition = `opacity ${transitionDuration}ms`;
            secondImage.style.transition = `opacity ${transitionDuration}ms`;
            setSecondImageSrc(src);
            window.requestAnimationFrame(() => {
                setOpacity(0);
                timeoutId = setTimeout(() => {
                    firstImage.style.transition = '';
                    secondImage.style.transition = '';
                    setFirstImageSrc(src);
                    window.requestAnimationFrame(() => {
                        setOpacity(1);
                    });
                }, transitionDuration);
            });
        }

        return () => {
            if (timeoutId) {
                window.clearTimeout(timeoutId);
            }
        };
    }, [src, transitionDuration]);

    return (
        <React.Fragment>
            <Image opacity={opacity} src={firstImageSrc} ref={firstImageRef} />
            <Image opacity={1 - opacity} src={secondImageSrc} ref={secondImageRef} />
        </React.Fragment>
    );
};

export default AnimatedImage;
