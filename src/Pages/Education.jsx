import React, { useState } from 'react';
import './Education.css';
import { Link } from 'react-router-dom';

const Education = () => {
  const [showAchievements, setShowAchievements] = useState(null);

  const toggleAchievements = (index) => {
    setShowAchievements(showAchievements === index ? null : index); // Toggle achievements visibility
  };

  const educationData = [
    {
      img: '/img/NCF.jpg',
      institution: 'Naga College Foundation Inc.',
      details: 'B.S. in Computer Science 2023 to Current',
      achievements: ['Dean’s List - 1st Semester 2023', 'Participated in National Coding Competition'],
    },
    {
      img: '/img/ACLC.png',
      institution: 'AMA Computer Learning Center (ACLC)',
      details: 'Computer System Servicing (CSS) 2021-2023',
      achievements: ['Completed Advanced Troubleshooting Course', 'IT Support Internship'],
    },
    {
      img: '/img/TINAGO.png',
      institution: 'Tinago National High School',
      details: 'Secondary Level 2017-2021',
      achievements: ['Top 10 Graduates', 'Class President'],
    },
    {
      img: '/img/NCS1.jpg',
      institution: 'Naga Central School 1',
      details: 'Primary Level 2012-2017',
      achievements: ['Best in Math', 'Gold Medalist in Regional Spelling Bee'],
    },
  ];

  return (
    <div className="education-section">
      <h1 className="education-title">My Education</h1>
      <div className="education-grid">
        {educationData.map((item, index) => (
          <div className="education-column" key={index}>
            <div className="education-item">
              <img src={item.img} alt={item.institution} />
              <div>
                <div className="institution">{item.institution}</div>
                <div className="details">{item.details}</div>
                <button
                  className="see-more-button"
                  onClick={() => toggleAchievements(index)}
                  aria-label={`Toggle achievements for ${item.institution}`}
                >
                  {showAchievements === index ? 'See Less' : 'See More'}
                </button>
                {showAchievements === index && (
                  <div className="achievements">
                    <ul>
                      {item.achievements.map((ach, idx) => (
                        <li key={idx}>{ach}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/hobbies">
        <button className="learn-more-hobbies-btn">
          Learn More About My Hobbies
        </button>
      </Link>
    </div>
  );
};

export default Education;
