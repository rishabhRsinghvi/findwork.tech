import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import JobListings from './components/JobListings';
import JobSubmission from './components/JobSubmission';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs" element={<JobListings />} />
        <Route path="/submit-job" element={<JobSubmission />} />
      </Routes>
    </Router>
  );
}

export default App;
