import JobsPage from './JobsPage';

const jobsPageServer =async ({searchParams}) => {

  let allJobs = [];
  let error = '';

  const filter = await searchParams
  console.log(filter);
  
  try
  {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/job/all`)

    if (!res.ok)
    {
      throw new Error ('Jobs Not Found!.')
    }
    const payload = await res.json()
    allJobs = payload.jobPosts
  }
  catch (err)
  {
    error = err.message
  }

  return (
    <div>
      <JobsPage allJobs={allJobs} err={error} filter={filter} />
    </div>
  );
};

export default jobsPageServer;