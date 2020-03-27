import React, { useState, useMemo, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { State } from '../../redux/types';
import { EncounterState } from '../../redux/reducers/encounter';
import { updateEntityConcentration } from '../../redux/actions/encounter';
import { Tooltip } from '../Tooltip';
import { ConcentrationContainer, ConcentrationLetter, ConcentrationDuration } from './style';

interface StateProps {
    encounter: EncounterState | null;
}

interface DispatchProps {
    updateEntityConcentration: typeof updateEntityConcentration;
}

export interface ConcentrationProps {
    entityKey: number;
    color: string;
    small?: boolean;
}

const Concentration: React.FC<ConcentrationProps & StateProps & DispatchProps> = ({ entityKey, color, small, encounter, updateEntityConcentration }) => {
    const durationElementRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const { current: durationElement } = durationElementRef;
        if (durationElement) {
            durationElement.style.transform = 'scale(1)';
        }
    }, [])  // eslint-disable-line

    const since = useMemo(() => {
        if (!encounter || encounter.concentrationByKey[entityKey] === undefined) {
            return null;
        }

        return encounter.concentrationByKey[entityKey];
    }, [encounter, entityKey]);
    
    const duration = useMemo(() => {
        if (!encounter || !since) {
            return 0;
        }

        return encounter.currentRound - since;
    }, [since, encounter]);
    const [isDurationVisible, setIsDurationVisible] = useState(since !== null);

    const tooltipText = useMemo(() => { 
        if (since === null) {
            return 'Click when character starts concentrating';
        }

        return `Concentrating for ${duration} round${duration === 1 ? '' : 's'} (since round ${since})`;
    }, [since, duration]);

    const handleClick = () => {
        if (since === null && encounter && encounter.currentRound) {
            updateEntityConcentration(entityKey, encounter.currentRound);

            setIsDurationVisible(true);
            window.requestAnimationFrame(() => window.requestAnimationFrame(() => {
                const { current: durationElement } = durationElementRef;
                if (durationElement) {
                    durationElement.style.transform = 'scale(1)';
                }
            }));
        } else {
            updateEntityConcentration(entityKey, null);

            const { current: durationElement } = durationElementRef;
            if (durationElement) {
                durationElement.style.transform = 'scale(0.001)';
            }
            window.setTimeout(() => setIsDurationVisible(false), 100);
        }
    };

    return (
        <Tooltip title={tooltipText}>
            <ConcentrationContainer small={small}>
                <ConcentrationLetter color={color} selected={since !== null} onClick={handleClick} small={small}>
                    C
                </ConcentrationLetter>
                {isDurationVisible ? (
                    <ConcentrationDuration color={color} ref={durationElementRef}>
                        {duration}
                    </ConcentrationDuration>
                ) : null}
            </ConcentrationContainer>
        </Tooltip>
    );
};

const mapStateToProps = (state: State) => ({
    encounter: state.encounter || null,
});

export default connect(mapStateToProps, { updateEntityConcentration })(Concentration);
