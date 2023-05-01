import React from 'react';
import NavigationBar from '../../sharedPage/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            
        </>
    );
};

export default Layout;