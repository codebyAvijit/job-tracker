import React, { useEffect, useState } from "react";
import AddJobForm from "./components/AddJobForm";
import StatsSection from "./components/StatsSection";

const App = () => {
  // const [jobs, setJobs] = useState([]);
  const [jobs, setJobs] = useState(() => {
    const stored = localStorage.getItem("jobs");
    return stored ? JSON.parse(stored) : [];
  });

  //adding state for search functionality

  const [searchTerm, setSearchTerm] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editCompany, setEditCompany] = useState("");
  const [editPosition, setEditPosition] = useState("");
  const [editStatus, setEditStatus] = useState("");

  //setting up localStorage to get data

  // useEffect(() => {
  //   const getStoredItem = localStorage.getItem("jobs");
  //   if (getStoredItem) {
  //     setJobs(JSON.parse(getStoredItem));
  //   }
  // }, []);

  //if item is not stored in local storage then setting it

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  // Create job
  const handleJobs = (job) => {
    setJobs([...jobs, job]);
    console.log("Jobs: ", [...jobs, job]);
  };

  // Delete job
  const deleteJob = (index) => {
    setJobs(jobs.filter((_, jobId) => jobId !== index));
  };

  // Save edited job
  const handleEditSave = (updatedJob, index) => {
    const newJobs = [...jobs];
    newJobs[index] = updatedJob;
    setJobs(newJobs);
    setEditingIndex(null); // exit edit mode
  };

  // Start editing
  const startEditing = (index) => {
    setEditingIndex(index);
    setEditCompany(jobs[index].company);
    setEditPosition(jobs[index].position);
    setEditStatus(jobs[index].status);
  };

  //filtering jobs

  const filteredJobs = jobs.filter((job) => {
    return (
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.position.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <>
      <div className="text-3xl font-bold text-center mb-5">Job Tracker</div>
      <AddJobForm onAddJob={handleJobs} />
      {/* search input */}
      <input
        type="text"
        placeholder="Enter Your Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 rounded mb-4 w-full"
      />
      <div className="mt-5">
        <h2 className="text-xl font-semibold">Job List</h2>
        {jobs.length === 0 ? (
          <p>No jobs yet. Add one above 👆</p>
        ) : (
          filteredJobs.map((job, index) => (
            <div key={index} className="border-b p-2">
              {editingIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editCompany}
                    onChange={(e) => setEditCompany(e.target.value)}
                  />
                  <input
                    type="text"
                    value={editPosition}
                    onChange={(e) => setEditPosition(e.target.value)}
                  />
                  <select
                    value={editStatus}
                    onChange={(e) => setEditStatus(e.target.value)}
                  >
                    <option value="applied">Applied</option>
                    <option value="interviewing">Interviewing</option>
                    <option value="offer">Offer</option>
                    <option value="rejected">Rejected</option>
                  </select>
                  <button
                    onClick={() =>
                      handleEditSave(
                        {
                          company: editCompany,
                          position: editPosition,
                          status: editStatus,
                        },
                        index
                      )
                    }
                    className="text-white bg-gray-800 hover:bg-gray-900 px-5 py-2.5 rounded-lg"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingIndex(null)}
                    className="text-white bg-gray-800 hover:bg-gray-900 px-5 py-2.5 rounded-lg"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <p>Company: {job.company}</p>
                  <p>Position: {job.position}</p>
                  <p>Status: {job.status}</p>
                  <button
                    onClick={() => startEditing(index)}
                    className="text-white bg-gray-800 hover:bg-gray-900 px-5 py-2.5 rounded-lg"
                  >
                    Edit
                  </button>{" "}
                  <button
                    onClick={() => deleteJob(index)}
                    className="text-white bg-gray-800 hover:bg-gray-900 px-5 py-2.5 rounded-lg"
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          ))
        )}
      </div>

      <StatsSection jobs={jobs} />
    </>
  );
};

export default App;
