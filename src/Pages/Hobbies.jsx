// src/Pages/Hobbies.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Hobbies.css'; // Import your CSS styles
import { FaMotorcycle, FaPlane, FaRunning, FaGamepad, FaLaptopCode, FaBook } from 'react-icons/fa'; // Importing icons from react-icons

function Hobbies() {
  return (
    <div className="hobbies-container">
      <h1>My Hobbies</h1>
      <p>Here are a few of the things I enjoy doing in my free time.</p>
      <div className="hobbies-icons">
        <div className="hobby-item">
          <FaMotorcycle size={50} />
          <p>Riding Motorcycle</p>
          <span className="hobby-description">Exploring new places and feeling the freedom of the open road.</span>
        </div>
        <div className="hobby-item">
          <FaPlane size={50} />
          <p>Travel</p>
          <span className="hobby-description">Experiencing new locations and discovering breathtaking destinations.</span>
        </div>
        <div className="hobby-item">
          <FaRunning size={50} />
          <p>Running</p>
          <span className="hobby-description">Started making it a hobby to lessen the weight and have a healthy body.</span>
        </div>
        <div className="hobby-item">
          <FaGamepad size={50} />
          <p>Gaming</p>
          <span className="hobby-description">Immersing myself in exciting virtual worlds and competitive challenges.</span>
        </div>
        <div className="hobby-item">
          <FaLaptopCode size={50} />
          <p>Coding</p>
          <span className="hobby-description">Building projects and solving problems through programming.</span>
        </div>
        <div className="hobby-item">
          <FaBook size={50} />
          <p>Reading</p>
          <span className="hobby-description">Diving into comic books that is interesting to my perspective.</span>
        </div>
      </div>
      <Link to="/contact" className="btn btn-primary">Get In Touch</Link>
    </div>
  );
}

export default Hobbies;
