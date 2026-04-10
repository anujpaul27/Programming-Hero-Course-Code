import Link from "next/link";
import ProductDetails from "./airtel/page";

const product = [
  {
    id: 1,
    name: "T-shirt",
    price: 200,
  },
  {
    id: 2,
    name: "Pant",
    price: 300,
  },
];

const PhonePage = () => {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {product.map((value) => (
        <ProductDetails key={value.id} value={value}></ProductDetails>
      ))}
      <Link href={"/"}>Home</Link>
    </div>
  );
};

export default PhonePage;
