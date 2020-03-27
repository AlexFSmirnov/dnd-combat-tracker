import React from 'react';
import { AppBar, AppBarProps, Toolbar } from '@material-ui/core';
import { NavbarContainer } from './style';

const Navbar: React.FC<AppBarProps> = ({ children, ...other }) => {
    return (
        <NavbarContainer>
            <AppBar position="fixed" color="secondary" style={{ minHeight: '56px' }} {...other}>
                <Toolbar style={{ minHeight: '56px' }}>
                    {children}
                </Toolbar>
            </AppBar>
        </NavbarContainer>
    );
};

export default Navbar;
