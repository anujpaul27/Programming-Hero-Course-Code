import { getUserServer } from "@/Components/share/getUser";
import JobApplicationPage from "./JobApplicationPage";

export default async function Page({ params }) {
  const user = await getUserServer();

  // 2. Await the params object (Required in newer Next.js versions)
  const { id } = await params;

  if (user.role !== "seeker") {
    return (
      <div>
        <p className="text-red-400 text-center mt-4">
          Just Seecker Can Apply to the job
        </p>
      </div>
    );
  }

  // count length
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/job/apply/count/${user.id}`,
  );
  const payload = await response.json();
  const count = payload.count;

  return (
    <div>
      <JobApplicationPage id={id} count={count} />
    </div>
  );
}
