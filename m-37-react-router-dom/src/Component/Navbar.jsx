import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <h1>Iam Navbar </h1>
            <NavLink to={'/login'}>Login </NavLink>
            <NavLink to={'/registration'}>Registration</NavLink>
        </div>
    );
};

export default Navbar;