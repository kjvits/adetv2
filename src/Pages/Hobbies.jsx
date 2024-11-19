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
        {/* Corrected image paths */}
        <img src="/img/vsvs.jpg" alt="VS VS" />
        <img src="/img/val.png" alt="Valorant" />
        <img src="/img/wuwa.webp" alt="WUWU" />
        <img src="/img/lol.png" alt="League of Legends" />
        <img src="/img/acad.webp" alt="Academics" />
        <img src="/img/drift.webp" alt="Drifting" />
        <img src="/img/nano.webp" alt="Nano" />
        <img src="/img/swordhound.webp" alt="Sword Hound" />
        <img src="/img/orv.webp" alt="Omniscient Reader" />
        <img src="/img/eleceed.webp" alt="Eleceed" />
      </div>
      <Link to="/contact" className="btn btn-primary">Get In Touch</Link>
    </div>
  );
}

export default Hobbies;
