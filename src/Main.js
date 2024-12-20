import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Quali from './pages/quali';
import MyResume from './pages/MyResume';
import Projectpage from './pages/projectpage';

const Main = () => {
  return (
    <Router>
      <Routes>
        {/* The Routes decides which component to show based on the current URL. */}
        <Route path="/" element={<Home />} />
        <Route path="/qualify" element={<Quali />} />
        <Route path="/resume" element={<MyResume />} />
        <Route path='/projects' element={<Projectpage />} />
      </Routes>
    </Router>
  );
};           

export default Main;