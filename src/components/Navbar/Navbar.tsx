import React from 'react';
import { AppBar, AppBarProps, Toolbar } from '@material-ui/core';
import { NavbarContainer } from './style';

const Navbar: React.FC<AppBarProps> = ({ children, ...other }) => {
    return (
        <NavbarContainer>
            <AppBar position="relative" color="secondary" {...other}>
                <Toolbar>
                    {children}
                </Toolbar>
            </AppBar>
        </NavbarContainer>
    );
};

export default Navbar;
