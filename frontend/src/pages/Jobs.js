// src/pages/Jobs.js
import React, { useState, useEffect } from 'react';
import { fetchJobs } from '../services/api';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const loadJobs = async () => {
      const response = await fetchJobs();
      setJobs(response.data);
    };
    loadJobs();
  }, []);

  return (
    <div className="jobs">
      <h1>Job Board</h1>
      <ul>
        {jobs.map(job => (
          <li key={job._id}>
            <h2>{job.title}</h2>
            <p>Company: {job.company}</p>
            <p>{job.description}</p>
            <p>Location: {job.location}</p>
            <a href={job.applyLink} target="_blank" rel="noopener noreferrer">Apply</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Jobs;
