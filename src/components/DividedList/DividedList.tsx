import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { DividedListContainer, DividedListWrapper, Divider, DividedListSublistContainer } from './style';

export interface Multisize {
    small: boolean;
}

export interface DividedListProps {
    children: { 0: React.ReactElement<unknown & Multisize> } & Array<React.ReactElement<unknown & Multisize>>;
}

const DividedList = ({ children }: DividedListProps) => {
    const theme = useTheme();
    const small = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <DividedListContainer small={small}>
            <DividedListWrapper small={small}>
                <DividedListSublistContainer small={small}>
                    {React.cloneElement(children[0], { small })}
                </DividedListSublistContainer>
                {children.slice(1).map((child, id) => (
                    <React.Fragment key={child.key || id}>
                        <Divider color={theme.palette.secondary.main} small={small} />
                        <DividedListSublistContainer small={small}>
                            {React.cloneElement(child, { small })}
                        </DividedListSublistContainer>
                    </React.Fragment>
                ))}
            </DividedListWrapper>
        </DividedListContainer>
    );
};

export default DividedList;
