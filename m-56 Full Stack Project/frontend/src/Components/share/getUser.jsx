import { auth } from '@/app/lib/auth';
import { headers } from 'next/headers';

export  const getUserServer = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    return session?.user || null;
};


