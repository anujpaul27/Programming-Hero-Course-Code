'use client'
import React, { useEffect, useState } from 'react';

const Users = () => {

    const [use, setUser] = useState([])

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(data=> setUser(data))
    },[])

    return (
        <div>
            {
            use.map(user=>
                <li key={user.id}>{user.name}</li>
            )
            }
        </div>
    );
};

export default Users;