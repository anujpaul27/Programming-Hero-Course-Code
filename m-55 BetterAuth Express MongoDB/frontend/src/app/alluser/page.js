'use client'

import Users from "@/Component/Users";
import { useState } from "react";

const DashboardPage = () => {
    const [user, setUser] = useState(false)


    return (
        <div className="p-20">
            This is the all user page 
            <h1 onClick={()=> setUser(true)} >Show User</h1>
            {
                user && <Users/>
            }
        </div>
    );
};

export default DashboardPage;