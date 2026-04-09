import React from 'react';

const Navbar = () => {
    return (
        <div className='w-10/12 mx-auto my-2 flex  justify-around items-center  '>
            <h1 className='text-xl font-bold'>Book Vibe</h1>
            <div className='flex gap-5 justify-center items-center  '>
                <button className='btn'>Home</button>
                <p>Listed Books</p>
                <p>Page to Read </p>
            </div>
            <div>
                <button className='btn btn-active '>Sign In</button>
                <button className='btn btn-active '>Sign Up</button>
            </div>
        </div>
    );
};

export default Navbar;