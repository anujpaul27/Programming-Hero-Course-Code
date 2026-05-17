import { headers } from "next/headers";
import { auth } from "../lib/auth";


const allUserPage = async () => {

    const  {token} = await auth.api.getToken({
        headers: await headers()
    }) 

    try {
        const user = await  fetch('http://localhost:5000/alluser', {
        headers: {
            'token': token 
        }
    })
    const data = await user.json()
    } catch (error)
    {
        console.log(error.message);
    }
    
    return (
        <div>
            this is my page as well code 
        </div>
    );
};

export default allUserPage;