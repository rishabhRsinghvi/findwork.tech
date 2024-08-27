const express = require('express');
const app = express();
const cors = require('cors');

const jobsRoute = require('./routes/jobs');
const submitJobRoute = require('./routes/submitJob');

app.use(cors());
app.use(express.json());

app.use('/jobs', jobsRoute);
app.use('/submit-job', submitJobRoute);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
