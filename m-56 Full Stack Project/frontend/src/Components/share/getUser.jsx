import { auth } from '@/app/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export  const getUserServer = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    return session?.user || null;
};

export const RoleCheck = (role) =>
{
    const user = getUserServer()

    if (!user)
    {
        redirect('/login')
    }

    if (user.role !== role)
    {
        redirect('/unauthorize')
    }
}

export const getUserToken =async ()=>
{
    const session = await auth.api.getSession({
        headers: await headers() 
    })
    return session?.session?.token || null
}

export const sendToken = async () =>
{
    const userToken = await getUserToken()

    if (userToken === null)
    {
        return null
    }

    return {authorization: `Bearer ${userToken}`}
}


