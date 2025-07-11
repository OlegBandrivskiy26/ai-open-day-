import React, { useEffect, useState } from 'react';
import '../styles/education.css';

const images = [
  '/img/welcome/program1.jpg',
  '/img/welcome/program2.jpg',
  '/img/welcome/program3.jpg',
];


const ProgramMagistr = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="program-section">
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
    </section>
  );
};

export default ProgramMagistr;
