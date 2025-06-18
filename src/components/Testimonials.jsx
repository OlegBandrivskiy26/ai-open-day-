import React from 'react';
import '../styles/testimonials.css';

const LeaderTestimonial = ({ name, position, imageClass, text, gradientClass }) => {
  return (
    <section className={`leader-testimonial ${gradientClass}`}>
      <div className="testimonial-wrapper">
        <div className={`leader-image ${imageClass}`} />
        <div className="leader-content">
          <h2 className="leader-name">{name}</h2>
          <p className="leader-position">{position}</p>
          <p className="leader-quote">“{text}”</p>
        </div>
      </div>
    </section>
  );
};

export default LeaderTestimonial;
