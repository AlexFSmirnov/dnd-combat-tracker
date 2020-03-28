import React from 'react';
import { useMediaQuery, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { DividedListContainer, DividedListWrapper, Divider, DividedListSublistContainer } from './style';

export interface Multisize {
    small: boolean;
}

export interface DividedListProps {
    titles: string[];
    children: Array<null | React.ReactElement<unknown & Multisize>>;
    marginTopOverride?: string;
    marginBottomOverride?: string;
}

const DividedList = ({ titles, children, marginBottomOverride, marginTopOverride }: DividedListProps) => {
    const theme = useTheme();
    const small = useMediaQuery(theme.breakpoints.down('sm'));

    const filteredChildren = children.filter(c => c !== null) as Array<React.ReactElement<unknown & Multisize>>;

    return (
        <DividedListContainer small={small}>
            <DividedListWrapper small={small}>
                {filteredChildren.length > 0 ? (
                    <DividedListSublistContainer small={small}>
                        <Typography variant="h5">{titles[0]}</Typography>
                        {React.cloneElement(filteredChildren[0], { small })}
                    </DividedListSublistContainer>
                ) : null}
                {filteredChildren.length > 1 ? filteredChildren.slice(1).map((child, idx) => (
                    <React.Fragment key={child.key || idx}>
                        <Divider color={theme.palette.secondary.main} small={small} marginTopOverride={marginTopOverride} marginBottomOverride={marginBottomOverride} />
                        <DividedListSublistContainer small={small}>
                            <Typography variant="h5">{titles[idx + 1]}</Typography>
                            {React.cloneElement(child, { small })}
                        </DividedListSublistContainer>
                    </React.Fragment>
                )) : null}
            </DividedListWrapper>
        </DividedListContainer>
    );
};

export default DividedList;
