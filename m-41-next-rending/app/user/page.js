import { Suspense } from "react";


const UserPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    return (
        <div>
            <Suspense>
                
            </Suspense>
        </div>
    );
};

export default UserPage;