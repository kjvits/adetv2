import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Education from './Pages/Education';
import Hobbies from './Pages/Hobbies';
import Navbar from './Pages/Navbar';
import Contact from './Pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page path should be '/' */}
        <Route path="/about" element={<About />} /> {/* About page path should be '/about' */}
        <Route path="/education" element={<Education />} /> {/* Education page path should be '/education' */}
        <Route path="/hobbies" element={<Hobbies />} /> {/* Hobbies page path should be '/hobbies' */}
        <Route path="/contact" element={<Contact />} /> {/* Ensure this path is included */}
      </Routes>
    </Router>
  );
}

export default App;
