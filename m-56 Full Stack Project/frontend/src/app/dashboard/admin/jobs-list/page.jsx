import React from "react";
import RecentJobs from "./RecentJobs";
import { getUserServer, getUserToken, sendToken } from "@/Components/share/getUser";

const JobListPage = async () => {
  let err = ''
  let data = []
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/job/all`,{
      headers: await sendToken()
    });

    if (!res.ok) {
      err = res.statusText
    }

    const payload = await res.json();
    data = payload?.jobPosts;// it's a task not gliming other person to get up
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
