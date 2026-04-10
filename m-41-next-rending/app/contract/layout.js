import Link from "next/link";

const ContractLayout = ({ children }) => {
  return (
    <div className="flex flex-col mt-10  items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex gap-5 text-3xl ">
        <Link href={"/contract/phone"}>Phone</Link>
        <Link href={"/contract/email"}>Email</Link>
      </div>
      {children}
    </div>
  );
};

export default ContractLayout;
