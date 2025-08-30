import React from "react";

const StatsSection = ({ jobs }) => {
  const stats = jobs.reduce(
    (acc, job) => {
      acc.total++;
      acc[job.status] = (acc[job.status] || 0) + 1;
      return acc;
    },
    { total: 0, applied: 0, interviewing: 0, offer: 0, rejected: 0 }
  );
  const successRate =
    stats.total > 0 ? ((stats.offer / stats.total) * 100).toFixed(1) : 0;

  const rejectionRate =
    stats.total > 0 ? ((stats.rejected / stats.total) * 100).toFixed(1) : 0;

  const interviewRate =
    stats.total > 0 ? ((stats.interviewing / stats.total) * 100).toFixed(1) : 0;

  return (
    <div className="p-4 border rounded-lg mt-4 shadow-md">
      <h2 className="text-xl font-bold mb-2">Stats</h2>
      <p>Total Jobs: {stats.total}</p>
      <p>Applied: {stats.applied}</p>
      <p>Interviewing: {stats.interviewing}</p>
      <p>Offers: {stats.offer}</p>
      <p>Rejected: {stats.rejected}</p>
      <p>Success Rate: {successRate}%</p>
      <p>Rejection Rate: {rejectionRate}%</p>
      <p>Interview Rate: {interviewRate}%</p>
    </div>
  );
};

export default StatsSection;
