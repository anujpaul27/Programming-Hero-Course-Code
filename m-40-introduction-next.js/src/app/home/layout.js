import Link from "next/link";
import React from "react";

const HomeLayout = ({ children }) => {
  return (
    <div>
      <nav className="flex gap-5 ">
        <Link href={"/home/profile"}>Mission</Link>
        <Link href={"/home/121214"}>Vision Dynamic</Link>
      </nav>
      {children}
    </div>
  );
};

export default HomeLayout;
