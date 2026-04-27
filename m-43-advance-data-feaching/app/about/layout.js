import Link from 'next/link';
import React from 'react';

// Static Metadata 
export const metadata = {
  title: "About Page",
  description: "This page tell about of this page as well.",
};

const AboutLayout = ({children}) => {
    return (
        <>
            <Link href={'/about/mission'}>Mission</Link>
            <hr />
            {children}
        </>
    );
};

export default AboutLayout ;