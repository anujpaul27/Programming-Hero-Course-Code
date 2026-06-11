import JobsPage from './JobsPage';

const jobsPageServer =async () => {

  let allJobs = null;
  let error = null;
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
    console.error(err.message)
    error = err.message
  }

  return (
    <div>
      <JobsPage allJobs={allJobs} err={error} />
    </div>
  );
};

export default jobsPageServer;