import React from "react";
import { useState } from "react";

const AddJobForm = (props) => {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [status, setStatus] = useState("");
  const jobHandler = (e) => {
    e.preventDefault();
    const job = { company, position, status };
    props.onAddJob(job); // call parent’s function
    setCompany("");
    setPosition("");
    setStatus(""); // reset form after submit
  };

  return (
    <div>
      <form action="submit" onSubmit={jobHandler}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label htmlFor="company">Company: </label>
            <input
              type="text"
              value={company}
              onChange={(e) => {
                setCompany(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="position">Position: </label>
            <input
              type="text"
              value={position}
              onChange={(e) => {
                setPosition(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="status">Status: </label>
            <select
              value={status}
              onChange={(e) => {
                setStatus(e.target.value);
              }}
            >
              <option value="" hidden></option>
              <option value="applied">Applied</option>
              <option value="interviewing">Interviewing</option>
              <option value="offer">Offer</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
          <button
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Add Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddJobForm;
