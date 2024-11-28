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

      <h1>Hi, I am Khurt</h1>
      <p>BSCS - 2B</p>

      <p className="additional-text">
        I'm a Computer Science student with a passion for coding and technology. 
        I love learning new programming languages and exploring the latest trends in software development. 
        My goal is to continuously improve my skills and contribute to impactful projects.
      </p>

      <p className="more-info">
        When I'm not coding, you can find me experimenting with new tools, building personal projects, 
        riding a motorcycle or gaming. I'm always eager to collaborate and share knowledge with others.
      </p>

      <p className="more-info">
        Currently, I'm focused on web development, particularly frontend frameworks like React.js and backend technologies like Node.js. 
      </p>

      <p className="more-info">
        I'm passionate about solving real-world problems through technology and believe in the power of collaboration to drive positive change.
      </p>

      <Link to="/about" className="btn btn-primary">
        Learn More
      </Link>

      {/* Social Media Icons */}
      <div className="social-icons">
        <a href="https://github.com/kjvits" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FaGithub size={35} />
        </a>
        <a href="https://www.facebook.com/jaysonkhurt" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FaFacebook size={35} />
        </a>
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FaDiscord size={35} />
        </a>
        <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FaGoogle size={35} />
        </a>
      </div>
    </div>
  );
}

export default Home;
