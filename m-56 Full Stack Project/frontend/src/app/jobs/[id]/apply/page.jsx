import { getUserServer } from "@/Components/share/getUser";
import JobApplicationPage from "./JobApplicationPage";
// FIX: Import redirect from next/navigation instead of next/dist
import { redirect } from "next/navigation"; 

export default async function Page({ params }) {
  const user = await getUserServer();

  // Await the params object (Required in Next.js 15+)
  const { id } = await params;

  // 1. Check if user exists
  if (!user) {
    redirect(`/login?redirect=/jobs/${id}/apply`);
  }

  // 2. Validate user role
  if (user?.role !== "seeker") {
    return (
      <div>
        <p className="text-red-400 text-center mt-4">
          Just Seeker Can Apply to the job
        </p>
      </div>
    );
  }

  // 3. Fetch application count
  // Tip: Added cache: 'no-store' to ensure you always get the fresh count on the server
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/job/apply/count/${user.id}`,
    { cache: 'no-store' } 
  );

  if (!response.ok) {
    return (
      <div>
        <p className="text-red-400 text-center mt-4">
          Job count fetch failed 
        </p>
      </div>
    );
  }

  const payload = await response.json();
  const count = payload.count;

  return (
    <div>
      <JobApplicationPage 
        id={id} 
        count={count} 
        userId={user.id} 
        memberStatus={user.memberStatus} 
      />
    </div>
  );
}
