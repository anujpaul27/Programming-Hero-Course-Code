import React from "react";
import RecentJobs from "./RecentJobs";

const JobListPage = async () => {
  let err = ''
  let data = []
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/job/all`,
    );

    if (!res.ok) {
      if (!res.ok) throw new Error("Failed to load jobs");
    }

    const payload = await res.json();
    data = payload?.jobPosts;
  } catch (error) {
    err = error.message
  }

  return (
    <div>
      <RecentJobs jobsData={data} err={err}/>
    </div>
  );
};

export default JobListPage;
