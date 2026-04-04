import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData()
    console.log(user);

    return (
        <div>

            <h3>Name: {user.name}</h3>
            <h3>Email: {user.email}</h3>
            <h3>City: {user.address.city}</h3>
            {/* <h4>{user.phone}</h4> */}
            {/* <h5>{user.website}</h5> */}
        </div>
    );
};

export default UserDetails;