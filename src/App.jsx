import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Education from './Pages/Education';
import Hobbies from './Pages/Hobbies';
import Contact from './Pages/Contact';

// Optional: 404 Page Not Found Component
import NotFound from './Pages/NotFound'; 

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

        {/* Catch-all route for any invalid paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
