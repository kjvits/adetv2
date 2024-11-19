import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Ensure the CSS file is imported

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        {/* Navbar Brand (Logo or Website name) */}
        <Link className="navbar-brand" to="/">Home</Link>

        {/* Navbar Toggler for mobile screens */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {/* About Link */}
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            {/* Education Link */}
            <li className="nav-item">
              <Link className="nav-link" to="/education">Education</Link>
            </li>
            {/* Hobbies Link */}
            <li className="nav-item">
              <Link className="nav-link" to="/hobbies">Hobbies</Link>
            </li>
            {/* Contact Link */}
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;