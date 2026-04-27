import { notFound } from "next/navigation";

const DynamicPage = async ({ params }) => {
    const { id } = await params;


    if (id === '3')
    {
        notFound();
    }

    return (
        <div>
            <h1> Product ID is {id} </h1>
        </div>
    );
};

export default DynamicPage;