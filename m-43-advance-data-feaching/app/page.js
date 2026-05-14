import { format } from "date-fns";

const HomePage = () => {
  const date = new Date();
  const formdated = format(date, 'do MMM   yyyy')
  return (
    <>
      
      <h1 className="mx-auto my-auto text-3xl text-center ">Local Date: {formdated} </h1>
    </>
  );
};

export default HomePage;