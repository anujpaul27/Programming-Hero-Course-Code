import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <h1>Iam Navbar </h1>
            <Link to={'/login'}>Login </Link>
        </div>
    );
};

export default Navbar;