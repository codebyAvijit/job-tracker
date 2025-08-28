import React, { useState } from "react";
import AddJobForm from "./components/AddJobForm";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const handleJobs = (job) => {
    setJobs([...jobs, job]);
    console.log("Jobs: ", [...jobs, job]);
  };
  const deleteJob = (index) => {
    setJobs(
      jobs.filter((_, jobId) => {
        return jobId !== index;
      })
    );
  };
  return (
    <>
      <div className="text-3xl font-bold text-center mb-5">Job Tracker</div>
      <AddJobForm onAddJob={handleJobs} />

      <div className="mt-5">
        <h2 className="text-xl font-semibold">Job List</h2>
        {jobs.length === 0 ? (
          <p>No jobs yet. Add one above 👆</p>
        ) : (
          jobs.map((job, index) => (
            <div key={index} className="border-b p-2">
              Company: {job.company} | Position: {job.position} | Status:{" "}
              {job.status}
              <br></br>
              {jobs.length === 0 ? (
                ""
              ) : (
                <div className="text-center mt-4">
                  <button
                    onClick={() => {
                      deleteJob(index);
                    }}
                    className="text-white  bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  >
                    Delete Job
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>

      <div className="mt-5">Stats</div>
    </>
  );
};

export default App;
