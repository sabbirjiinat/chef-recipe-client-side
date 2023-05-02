import React from 'react';
import NavigationBar from '../../sharedPage/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../../sharedPage/Footer/Footer';

const Layout = () => {
    return (
        <>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </>
    );
};

export default Layout;