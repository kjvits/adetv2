// src/Pages/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';  // Assuming you have an About-specific CSS file for styles

function About() {
  return (
    <div className="about-container">
      {/* Header Section with Flexbox for Image */}
      <div className="about-header">
        <div className="profile-image-container">
          <img 
            src="/img/aboupic.jpg"  // Replace with the actual image path
            alt="Profile"
            className="profile-image" 
          />
        </div>
        <h2>About Me</h2>
      </div>

      {/* Intro Text */}
      <p className="intro-text">
       <span className="highlight">Khurt Jayson Vita</span>
      </p>

      {/* Description - Two Column Layout */}
      <div className="two-column">
        <p className="description">
          I’m a sophomore student at the College of Computer Studies majoring in Computer Science. Currently, I'm building my portfolio and expanding my knowledge in web development, app creation, and problem-solving.
        </p>
        <div className="personal-info">
          <p><strong>Location:</strong> <span className="highlight">[Naga City, Philippines]</span></p>
          <p><strong>Current Occupation:</strong> Student, Aspiring Developer</p>
          <p><strong>What I Do:</strong> I spend my days coding, gaming, reading, and exploring new technologies. I enjoy challenging myself with different projects, especially in areas like full-stack development and AI.</p>
        </div>
      </div>

      {/* Hobbies - Two Column Layout */}
      <div className="two-column">
        <p className="hobbies">
          I’m passionate about gaming, coding, and reading—whether it's exploring new virtual worlds, building projects, or diving into comic books and webtoons.
        </p>
        <div className="aspiration">
          <p>
            My goal is to become a skilled developer who not only creates innovative solutions but also contributes to the tech community. I am excited to collaborate with others, learn new skills, and apply my knowledge to make an impact.
          </p>
        </div>
      </div>

      {/* Link to Education page using the Link component */}
      <Link to="/education" className="learn-more-btn">
        Learn About My Education
      </Link>
    </div>
  );
}

export default About;
