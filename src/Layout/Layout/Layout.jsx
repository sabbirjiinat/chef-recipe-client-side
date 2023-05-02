import React from 'react';
import NavigationBar from '../../sharedPage/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../../sharedPage/Footer/Footer';

const Layout = () => {
    return (
        <>
            <NavigationBar></NavigationBar>
            <div className=' min-h-[calc(100vh-399px)]  '>
            <Outlet></Outlet>
           </div>
            <Footer></Footer>
            
        </>
    );
};

export default Layout;