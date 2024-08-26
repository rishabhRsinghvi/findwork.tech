import React, { useState, useEffect } from 'react';

function JobListings() {
  const [jobs, setJobs] = useState([]);
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');

  const fetchJobs = async () => {
    const response = await fetch(`http://localhost:5000/jobs?category=${category}&location=${location}`);
    const jobsData = await response.json();
    setJobs(jobsData.data);
  };

  useEffect(() => {
    fetchJobs();
  }, [category, location]);

  return (
    <div>
      <h1>Job Listings</h1>
      <div className="filters">
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="tech">Tech</option>
          <option value="marketing">Marketing</option>
          {/* Add more categories as needed */}
        </select>
        
        <select onChange={(e) => setLocation(e.target.value)}>
          <option value="">All Locations</option>
          <option value="remote">Remote</option>
          <option value="onsite">On-site</option>
          {/* Add more locations as needed */}
        </select>
      </div>

      <div className="job-list">
        {jobs.length > 0 ? (
          jobs.map(job => (
            <div key={job.job_id} className="job-item">
              <h3>{job.job_title}</h3>
              <p>{job.employer_name}</p>
              <p>{job.job_city}, {job.job_country}</p>
            </div>
          ))
        ) : (
          <p>No jobs found</p>
        )}
      </div>
    </div>
  );
}

export default JobListings;
