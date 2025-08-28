import React, { useState } from "react";
import AddJobForm from "./components/AddJobForm";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const handleJobs = (job) => {
    setJobs([...jobs, job]);
    console.log("Jobs: ", [...jobs, job]);
  };
  return (
    <div className="text-3xl font-bold">
      Job Tracker
      <AddJobForm onAddJob={handleJobs} />
      <div>Job List</div>
      <div>Stats</div>
    </div>
  );
};

export default App;
