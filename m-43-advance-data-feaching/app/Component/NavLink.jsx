'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, className, children }) => {
    const pathName = usePathname();
    const isActive = pathName === href;
    console.log(isActive);
    return (
        <Link
            href={href}
            className={`${isActive ? 'border-b-2 border-purple-400 ' : ''} ${className}`}
        >
            {children}</Link>
    );
};

export default NavLink;