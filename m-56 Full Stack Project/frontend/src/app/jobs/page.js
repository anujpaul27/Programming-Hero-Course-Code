import JobsPage from "./JobsPage";

const jobsPageServer = async ({ searchParams }) => {
  let allJobs = [];
  let error = "";

  const filter = await searchParams;
  console.log(filter);

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/job/all`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filter),
        cache: 'no-store'
      },
    );

    if (!res.ok) {
      throw new Error("Jobs Not Found!.");
    }
    const payload = await res.json();
    allJobs = payload.jobPosts; 
    console.log(allJobs)
  } catch (err) {
    error = err.message;
  }

  return (
    <div>
      <JobsPage  jobs={allJobs} err={error} filter={filter} />
    </div>
  );
};

export default jobsPageServer;
