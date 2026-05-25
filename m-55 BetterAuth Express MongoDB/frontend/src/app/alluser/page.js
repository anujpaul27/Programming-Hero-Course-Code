'use client'

import dynamic from "next/dynamic";
import { useState } from "react";

const Users = dynamic(()=> import ('@/Component/Users'))
// import Users from "@/Component/Users";

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