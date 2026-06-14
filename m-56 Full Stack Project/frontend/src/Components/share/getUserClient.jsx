import { authClient } from "@/app/lib/auth-client";


export const getUserClient = () => {
  const { data: session, isPending, error } = authClient.useSession();

  if (isPending) return <div>Loading...</div>;

  return  session?.user || null;
};