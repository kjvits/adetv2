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
        <img src="src/assets/img/vsvs.jpg" alt="Hobby 1" />
        <img src="src/assets/img/val.png" alt="Hobby 2" />
        <img src="src/assets/img/wuwa.webp" alt="Hobby 3" />
        <img src="src/assets/img/lol.png" alt="Hobby 4" />
        <img src="src/assets/img/acad.webp" alt="Hobby 5" />
        <img src="src/assets/img/drift.webp" alt="Hobby 6" />
        <img src="src/assets/img/nano.webp" alt="Hobby 7" />
        <img src="src/assets/img/swordhound.webp" alt="Hobby 8" />
        <img src="src/assets/img/orv.webp" alt="Hobby 9" />
        <img src="src/assets/img/eleceed.webp" alt="Hobby 10" />
      </div>
      <Link to="/contact" className="btn btn-primary">Get In Touch</Link>
    </div>
  );
}

export default Hobbies;
