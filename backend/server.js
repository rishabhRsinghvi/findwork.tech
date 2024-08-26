const express = require('express');
const app = express();
const cors = require('cors');

// Routes
const jobsRoute = require('./routes/jobs');
const submitJobRoute = require('./routes/submitJob');

// Middleware
app.use(cors());
app.use(express.json());

// Use Routes
app.use('/jobs', jobsRoute);
app.use('/submit-job', submitJobRoute);

// Listen to port 5000
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
