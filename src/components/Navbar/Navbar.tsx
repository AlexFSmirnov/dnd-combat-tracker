import React from 'react';
import { AppBar, AppBarProps } from '@material-ui/core';
import { NavbarContainer, NavbarContentWrapper } from './style';

const Navbar: React.FC<AppBarProps> = ({ children, ...other }) => {
    return (
        <NavbarContainer>
            <AppBar position="sticky" color="secondary" {...other}>
                <NavbarContentWrapper>
                    {children}
                </NavbarContentWrapper>
            </AppBar>
        </NavbarContainer>
    );
};

export default Navbar;
