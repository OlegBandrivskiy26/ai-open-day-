import React from 'react';
import '../styles/education.css';

const EducationProgram = () => {
  return (
    <section className="education-section gradient-purple">
      <div className="education-wrapper">
        <div className="education-content">
          <h2 className="education-title">
            Освітня програма <br /> <span>“ARTIFICIAL INTELLIGENCE”</span>
          </h2>
          <p className="education-subtitle">
            Спеціальність: 123 Комп’ютерні науки.
          </p>
          <p className="education-subtitle">
            Освітня програма: Комп’ютерні науки (Системи штучного інтелекту).
          </p>
        </div>
        <div className="education-license">
          <p className="license-number">120</p>
          <p className="license-label">Ліцензійний обсяг місць</p>
        </div>
      </div>
    </section>
  );
};

export default EducationProgram;
