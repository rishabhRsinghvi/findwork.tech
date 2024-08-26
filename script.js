async function fetchJobs() {
    const response = await fetch('https://jobs.github.com/positions.json?description=developer&location=remote');
    const jobs = await response.json();
    const jobListings = document.getElementById('job-listings');
    jobListings.innerHTML = ''; // Clear existing content

    jobs.forEach(job => {
        const jobElement = document.createElement('div');
        jobElement.classList.add('job-listing');
        jobElement.innerHTML = `
            <a href="${job.url}" target="_blank">${job.title}</a>
            <p>${job.company} | ${job.location}</p>
        `;
        jobListings.appendChild(jobElement);
    });
}

window.onload = fetchJobs;
