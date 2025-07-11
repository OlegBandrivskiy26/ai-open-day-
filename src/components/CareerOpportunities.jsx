import React from 'react';
import '../styles/career.css';

const careerList = [
    'Фахівець з аналізу даних (Data Scientist)',
    'Інженер машинного навчання (Machine Learning Engineer)',
    'Інженер комп’ютерного зору (Computer Vision Engineer)',
    'Інженер з обробки природної мови (NLP Engineer)',
    'Інженер з робототехніки (Robotics Engineer)',
    'Інженер з роботи з великими даними (Big Data Engineer)',
    'Дослідник штучного інтелекту (AI Researcher)',
    'Менеджер продуктів на базі ШІ (AI Product Manager)',
    'Фахівець з етики та дотримання вимог у сфері ШІ (AI Ethics & Compliance Specialist)'
  ];

const CareerOpportunities = () => {
  return (
    <section className="career-section gradient-purple">
      <div className="career-wrapper">
        <h2 className="career-title">Кар’єрні можливості</h2>
        <p className="career-description">
          Після навчання ви зможете працювати в IT-компаніях, наукових центрах, фінансових установах, 
          медичних лабораторіях та інших високотехнологічних сферах.
        </p>
        <ul className="career-list">
          {careerList.map((role, i) => (
            <li key={i} className="career-item">• {role}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CareerOpportunities;
