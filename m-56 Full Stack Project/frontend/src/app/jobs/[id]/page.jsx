import React from "react";
import JobDetailsPage from "./jobDetailsPage";

const jobDetailsPageServer = async ({ params }) => {
  const { id } = await params;
  let job = null;
  let error = null;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/job/${id}`,
      { cache: "no-store" },
    );
    
    if (!res.ok)
    {
        throw new Error('Job Not Found!.')
    }

    const payload = await res.json();
    job=payload.job;

  } catch (err) {
    console.error(err.message);
    error = "Job post not found or load to failed.";
  }

  return (
    <div>
      <JobDetailsPage job={job} error={error} />
    </div>
  );
};

export default jobDetailsPageServer;
