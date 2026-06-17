import React from 'react';
import MyCompany from './serverPage';
import { getUserServer } from '@/Components/share/getUser';

const page = async () => {

    const user  = await getUserServer()
    
    const company = await  fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/company/${user?.id}`)
    const payload =await company.json()
    const cmp = payload.data;

    return (
        <div>
            <MyCompany user={user.id} cmp={cmp} />
        </div>
    );
};

export default page;