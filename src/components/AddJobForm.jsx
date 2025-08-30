import React from "react";
import { useState } from "react";
import ButtonComponent from "./ButtonComponent";

const AddJobForm = (props) => {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [status, setStatus] = useState("");

  // setting error state

  const [errors, setErrors] = useState({});

  const jobHandler = (e) => {
    e.preventDefault();
    if (!formValidation()) return;

    const job = { company, position, status };
    props.onAddJob(job);

    setCompany("");
    setPosition("");
    setStatus("");
    setErrors({});
  };

  const formValidation = () => {
    const newErrors = {};

    if (!company.trim()) {
      newErrors.company = "Please Enter Company name";
    }

    if (!position.trim()) {
      newErrors.position = "Please Enter Position name";
    }

    if (
      !["applied", "interviewing", "offer", "rejected"].includes(
        status.toLowerCase()
      )
    ) {
      newErrors.status = "Please Select a Valid Status";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // true if no errors
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
              onChange={(e) => {
                setCompany(e.target.value);
              }}
            />
            {errors.company && (
              <p className="text-red-500 text-sm text-center mt-1">
                {errors.company}
              </p>
            )}
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
              onChange={(e) => {
                setPosition(e.target.value);
              }}
            />
            {errors.position && (
              <p className="text-red-500 text-sm text-center mt-1">
                {errors.position}
              </p>
            )}
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
