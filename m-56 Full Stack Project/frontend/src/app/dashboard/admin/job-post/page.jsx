import { auth } from "@/app/lib/auth";
import { getUserServer } from "@/Components/share/getUser";
import { headers } from "next/headers";
import PostJobPage from "./jobPost";
import { redirect } from "next/navigation";

const JobPostParent = async () => {
  const user = await getUserServer();

  if (!user) {
    redirect('/login?redirect=/dashboard/admin/job-post');
  }

  return (
    <div>
      <PostJobPage creator={user.name} creatorId={user.id} />
    </div>
  );
};

export default JobPostParent;
