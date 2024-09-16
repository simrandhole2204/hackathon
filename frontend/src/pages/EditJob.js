// src/pages/EditJob.js
import React, { useState, useEffect } from 'react';
import { fetchJob, updateJob } from '../services/api';

const EditJob = ({ match }) => {
  const [job, setJob] = useState(null);
  const jobId = match.params.id;

  useEffect(() => {
    const loadJob = async () => {
      const response = await fetchJob(jobId);
      setJob(response.data);
    };
    loadJob();
  }, [jobId]);

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateJob(jobId, job);
    // Redirect or show success message
  };

  return (
    job && (
      <div className="edit-job">
        <h1>Edit Job Posting</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input type="text" name="title" value={job.title} onChange={handleChange} />
          </label>
          <label>
            Company:
            <input type="text" name="company" value={job.company} onChange={handleChange} />
          </label>
          <label>
            Description:
            <textarea name="description" value={job.description} onChange={handleChange}></textarea>
          </label>
          <label>
            Location:
            <input type="text" name="location" value={job.location} onChange={handleChange} />
          </label>
          <label>
            Apply Link:
            <input type="url" name="applyLink" value={job.applyLink} onChange={handleChange} />
          </label>
          <button type="submit">Update Job</button>
        </form>
      </div>
    )
  );
};

export default EditJob;
