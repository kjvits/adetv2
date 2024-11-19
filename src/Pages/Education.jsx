import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import './Education.css';

const Education = () => {
  return (
    <div className="education-section">
      <h1 className="education-title">My Education</h1>
      <ul className="education-list">
        <li className="education-item">
          <span className="institution">Naga College Foundation Inc.</span>
          <span className="details">B.S. in Computer Science <strong>2023 to Current</strong></span>
        </li>
        <li className="education-item">
          <span className="institution">AMA Computer Learning Center (ACLC)</span>
          <span className="details">Computer System Servicing (CSS) <strong>2021-2023</strong></span>
        </li>
        <li className="education-item">
          <span className="institution">Tinago National High School</span>
          <span className="details">Secondary Level <strong>2017-2021</strong></span>
        </li>
        <li className="education-item">
          <span className="institution">Naga Central School 1</span>
          <span className="details">Primary Level <strong>2012-2017</strong></span>
        </li>
      </ul>
      {/* Use Link to navigate to the hobbies page */}
      <Link to="/hobbies">
        <button className="education-button">Learn About My Hobbies</button>
      </Link>
    </div>
  );
};

export default Education;
