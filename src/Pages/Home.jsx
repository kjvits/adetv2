import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import Home-specific CSS
import { FaGithub, FaFacebook, FaDiscord, FaGoogle } from 'react-icons/fa';

function Home() {
  const [isHovered, setIsHovered] = useState(false);

  const handleImageHover = () => setIsHovered(!isHovered);

  return (
    <div className="home-container">
      <div
        className="profile-image-container"
        onMouseEnter={handleImageHover}
        onMouseLeave={handleImageHover}
      >
        <img
          src="/img/pfpic.jpg" // Replace with the actual image path
          alt="Profile"
          className={`profile-image ${isHovered ? 'hovered' : ''}`}
        />
      </div>

      <h1>Hi, I am Khurt Jayson Vita</h1>
      <p>BSCS- 2B!</p>

      <p className="additional-text">
        I'm passionate about coding, learning, and making a difference.
      </p>

      <Link to="/about" className="btn btn-primary">
        Learn More
      </Link>

      {/* Social Media Icons */}
      <div className="social-icons">
        <a href="https://github.com/kjvits" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FaGithub size={30} />
        </a>
        <a href="https://www.facebook.com/jaysonkhurt" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FaFacebook size={30} />
        </a>
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FaDiscord size={30} />
        </a>
        <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FaGoogle size={30} />
        </a>
      </div>
    </div>
  );
}

export default Home;
