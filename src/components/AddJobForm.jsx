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
            <label
              htmlFor="company"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Company:{" "}
            </label>
            <input
              type="text"
              value={company}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Company"
              required
              onChange={(e) => {
                setCompany(e.target.value);
              }}
            />
          </div>
          <div>
            <label
              htmlFor="position"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Position:
            </label>
            <input
              type="text"
              value={position}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Position"
              required
              onChange={(e) => {
                setPosition(e.target.value);
              }}
            />
          </div>
          <div>
            <label
              htmlFor="status"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Status:{" "}
            </label>
            <select
              value={status}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
        </div>
        <div className="text-center">
          <button className="text-white  bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
            Add Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddJobForm;
