import React, { useState } from 'react';

function HomePage() {
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');

  const searchJobs = async () => {
    const response = await fetch(`http://localhost:5000/jobs?query=${query}&location=${location}`);
    const jobsData = await response.json();
    setJobs(jobsData.data); // Assuming jobs are in a "data" array
  };

  return (
    <div>
      <h1>FindWork.tech</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Job title..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={searchJobs}>Search Jobs</button>
      </div>

      <section className="featured-jobs">
        <h2>Featured Jobs</h2>
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
      </section>
    </div>
  );
}

export default HomePage;
