import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';


const Main = () => {
  return (
    <Router>
      <Routes>
        {/* The Routes decides which component to show based on the current URL. */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};           

export default Main;