import React from 'react';
import { Outlet, Route } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';

const Check = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Check;