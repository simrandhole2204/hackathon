// src/pages/CreateJob.js
import React, { useState } from 'react';
import { createJob } from '../services/api';

const CreateJob = () => {
  const [job, setJob] = useState({
    title: '',
    company: '',
    description: '',
    location: '',
    applyLink: ''
  });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createJob(job);
    // Redirect or show success message
  };

  return (
    <div className="create-job">
      <h1>Create Job Posting</h1>
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
        <button type="submit">Create Job</button>
      </form>
    </div>
  );
};

export default CreateJob;
