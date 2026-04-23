import Image from "next/image";

const ProductDetailsPage = async ({ params }) => {
  // get the params
  const { id } = await params;

  // featch the specific data from the api
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await res.json();
  //   console.log(data);
  return (
    <div>
      <h1 className="text-2xl ">{data.title}</h1>
      <p>{data.description}</p>
      <Image src={data.thumbnail} width={300} height={300} alt="image"></Image>
    </div>
  );
};

export default ProductDetailsPage;
