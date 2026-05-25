
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto my-auto">
      <p className="text-3xl">Home page</p>
      <div className="flex gap-5 my-7 ">
        <Link href={'/register'}>Register</Link>
        <Link href={'/login'}>Login</Link>
        <Link href={'/profile'}>Create User</Link>
        <Link href={'/alluser'}>All User</Link>
      </div>
    </div>
  );
}
