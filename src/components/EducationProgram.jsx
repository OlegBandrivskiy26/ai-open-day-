import React, { useEffect, useState } from 'react';
import '../styles/education.css';

const images = [
  '/img/welcome/welcome1.jpg',
  '/img/welcome/welcome2.jpg',
  '/img/welcome/welcome3.jpg',
  '/img/welcome/welcome4.jpg',
  '/img/welcome/welcome5.jpg',
  '/img/welcome/welcome6.jpg',
  '/img/welcome/welcome7.jpg',
  '/img/welcome/welcome8.jpg',
  '/img/welcome/welcome9.jpg',
  '/img/welcome/welcome10.jpg',
  '/img/welcome/welcome12.jpg',
  '/img/welcome/welcome13.jpg',
  '/img/welcome/welcome14.jpg',
];


const EducationProgram = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="education-section">
      <div className="education-carousel">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`slide-${index}`}
            className={index === activeIndex ? 'active' : ''}
          />
        ))}
      </div>

      <div className="education-wrapper">
        <div className="education-content">
          <h2 className="education-title">
            Освітня програма <br /> <span>“ARTIFICIAL INTELLIGENCE”</span>
          </h2>
          <p className="education-subtitle">
            Спеціальність: F3 Комп’ютерні науки.
          </p>
          <p className="education-subtitle">
            Освітня програма: Бакалавр Комп’ютерні науки (Системи штучного інтелекту).
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
