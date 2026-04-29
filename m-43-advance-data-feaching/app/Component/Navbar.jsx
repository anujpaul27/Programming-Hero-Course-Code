'use client'
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const links = <>
        <p> <Link href={'/'}>Home</Link> </p>
        <p> <Link href={'/users'}>Users</Link> </p>
        <p> <Link href={'/about'}>About</Link> </p>
        <p> <Link href={'/posts'}>Posts</Link> </p>
        <p> <Link href={'/auth/signup'}>SignUp</Link> </p>
        <p> <Link href={'/auth/signin'}>SignIn</Link> </p>
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