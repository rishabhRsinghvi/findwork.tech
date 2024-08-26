const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

// Job Search Endpoint
router.get('/', async (req, res) => {
  const { query, location } = req.query;
  const apiUrl = `https://jsearch.p.rapidapi.com/search?query=${query}&location=${location}`;

  const response = await fetch(apiUrl);
  const jobs = await response.json();
  
  res.json(jobs);
});

module.exports = router;
