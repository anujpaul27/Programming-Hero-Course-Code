import React from 'react';
import RecentJobs from './RecentJobs';

const JobListPage = async () => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/job/all`);

  if (!res.ok)
  {
    if (!res.ok) throw new Error('Failed to load jobs');
  }

  const payload = await res.json()
  const data = payload?.jobPosts

  return (
    <div>
      <RecentJobs jobsData={data} />
    </div>
  );
};

export default JobListPage;