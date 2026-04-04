import { useLoaderData, useParams } from "react-router";

const Login = () => {
    const user = useLoaderData()
    console.log(user);
    const {pr} = useParams()
    console.log(pr);

    return (
        <div>
            <p>This is a login page as well </p>
        </div>
    );
};

export default Login;