import React from 'react';
import { Outlet } from "react-router";
import Footer from './Footer';
const Navbar = () => {
    return (
        <div>
            <h1>Navbar </h1>
            <Outlet/>
            <Footer/>
            
        </div>
    );
};

export default Navbar;