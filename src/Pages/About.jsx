import React from 'react';
import { Link } from 'react-router-dom';  // Import the Link component from react-router-dom
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <p className="intro-text">
        I'm <span className="highlight">Khurt Jayson Vita</span>
      </p>
      <p className="description">
        a sophomore student in the College of Computer Studies majoring in Computer Science.
      </p>
      <p className="hobbies">
        I'm into gaming, coding, and reading—whether it's exploring new virtual worlds,
        building projects, or diving into comic books.
      </p>
      {/* Link to Education page using the Link component */}
      <Link to="/education" className="learn-more-btn">
        Learn About My Education
      </Link>
    </div>
  );
}

export default About;
