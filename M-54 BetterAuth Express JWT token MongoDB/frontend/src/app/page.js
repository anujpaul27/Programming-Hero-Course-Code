import Link from "next/link";

export default function Home() {

  return (
    <div className="mx-auto my-auto  ">
      <p className="text-3xl">Home Page </p>
      
      <div className="flex gap-5 mt-5 ">
        <Link href='/register'>Register</Link>
        <Link href='/login'>Login</Link>
      </div>
    </div>
  );
}
