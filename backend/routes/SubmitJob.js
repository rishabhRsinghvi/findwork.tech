const express = require('express');
const router = express.Router();

const jobs = [];

router.post('/', (req, res) => {
  const newJob = req.body;
  jobs.push(newJob);  // Store in memory for now
  console.log('New job submitted:', newJob);
  res.status(200).json({ message: 'Job submitted successfully!' });
});

module.exports = router;
