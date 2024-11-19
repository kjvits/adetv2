// src/Pages/Hobbies.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Hobbies.css'; // Import your CSS styles

function Hobbies() {
  return (
    <div className="hobbies-container">
      <h1>My Hobbies</h1>
      <p>Here are a few of the things I enjoy doing in my free time.</p>
      <div className="hobbies-images">
        {/* Replace these <img> tags with your images */}
        <img src="img/vsvs.jpg" alt="Hobby 1" />
        <img src="img/val.png" alt="Hobby 2" />
        <img src="img/wuwa.webp" alt="Hobby 3" />
        <img src="img/lol.png" alt="Hobby 4" />
        <img src="img/acad.webp" alt="Hobby 5" />
        <img src="img/drift.webp" alt="Hobby 6" />
        <img src="img/nano.webp" alt="Hobby 7" />
        <img src="img/swordhound.webp" alt="Hobby 8" />
        <img src="img/orv.webp" alt="Hobby 9" />
        <img src="img/eleceed.webp" alt="Hobby 10" />
      </div>
      <Link to="/contact" className="btn btn-primary">Get In Touch</Link>
    </div>
  );
}

export default Hobbies;
