import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Home';
import Navbar from './components/navbar';
import Packages from './Packages';

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<Packages />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
