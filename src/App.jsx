import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Pages/navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Education from './Pages/Education';
import Hobbies from './Pages/Hobbies';
import Contact from './Pages/Contact';

function App() {
  return (
    <Router>
      {/* Navbar is always visible */}
      <Navbar />

      {/* Main routing for different pages */}
      <Routes>
        {/* Route for the home page */}
        <Route path="/" element={<Home />} />

        {/* Route for the about page */}
        <Route path="/about" element={<About />} />

        {/* Route for the education page */}
        <Route path="/education" element={<Education />} />

        {/* Route for the hobbies page */}
        <Route path="/hobbies" element={<Hobbies />} />

        {/* Route for the contact page */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;