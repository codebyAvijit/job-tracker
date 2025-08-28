import React, { useState } from "react";
import AddJobForm from "./components/AddJobForm";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const handleJobs = (job) => {
    setJobs([...jobs, job]);
    console.log("Jobs: ", [...jobs, job]);
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
            </div>
          ))
        )}
      </div>

      <div className="mt-5">Stats</div>
    </>
  );
};

export default App;
