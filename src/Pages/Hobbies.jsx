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
        <img src="public/img/vsvs.jpg"  />
        <img src="public/img/val.png"  />
        <img src="public/img/wuwa.webp"  />
        <img src="public/img/lol.png"  />
        <img src="public/img/acad.webp"  />
        <img src="public/img/drift.webp"  />
        <img src="public/img/nano.webp"  />
        <img src="public/img/swordhound.webp" />
        <img src="public/img/orv.webp"  />
        <img src="public/img/eleceed.webp" />
      </div>
      <Link to="/contact" className="btn btn-primary">Get In Touch</Link>
    </div>
  );
}

export default Hobbies;
