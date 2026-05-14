'use client'
import Link from 'next/link';
import React from 'react';
import NavLink from './NavLink';

const Navbar = () => {
    const links = <>
        <p> <NavLink href={'/'}>Home</NavLink> </p>
        <p> <NavLink href={'/users'}>Users</NavLink> </p>
        <p> <NavLink href={'/about'}>About</NavLink> </p>
        <p> <NavLink href={'/posts'}>Posts</NavLink> </p>
        <p> <NavLink href={'/auth/signup'}>SignUp</NavLink> </p>
        <p> <NavLink href={'/auth/signin'}>SignIn</NavLink> </p>
    </>
    return (
        <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
            <header className="flex h-16 items-center justify-between px-6">
                <ul className="flex items-center gap-4">
                    {links}
                </ul>
            </header>
        </nav>
    );
};

export default Navbar;