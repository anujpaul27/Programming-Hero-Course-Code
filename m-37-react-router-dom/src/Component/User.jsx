import React from 'react';
import { Link, useLoaderData } from 'react-router';



const User = () => {
    const users = useLoaderData()
    // console.log(users);

    return (
        <div>
            {users.map(user =>
                <div>
                    <h5>{user.name}</h5>
                    <Link to={`user/${user.id}`}>see user details</Link>
                </div>
            )}
        </div>
    );
};

export default User;