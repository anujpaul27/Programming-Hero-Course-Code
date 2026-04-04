import { useLoaderData } from "react-router";

const Login = () => {
    const user = useLoaderData()
    console.log(user);

    return (
        <div>
            <p>This is a login page as well </p>
        </div>
    );
};

export default Login;