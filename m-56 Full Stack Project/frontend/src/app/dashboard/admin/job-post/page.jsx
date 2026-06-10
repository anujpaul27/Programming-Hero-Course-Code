import { auth } from "@/app/lib/auth";
import { getUserServer } from "@/Components/share/getUser";
import { headers } from "next/headers";

const JobPostParent = async () => {
  const user = await getUserServer();
  console.log(user)
  return (
    <div>
      {user ? (
        <div>
          <h1>Job Post</h1>
          <p>Welcome, {user.name}!</p>
        </div>
      ) : (
        <p>Please log in to view this page.</p>
      )}
    </div>
  );
};

export default JobPostParent;
