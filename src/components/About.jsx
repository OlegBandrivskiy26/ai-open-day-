import React from 'react';
import '../styles/about.css';

const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="title__about">Чому обрати саме нас?</h1>

      <div className="about-grid">

        {/* Мета */}
        <div className="about-card">
          <h2 className="card-title">🎯 Мета</h2>
          <p className="card-text">
            Наша програма — це унікальна можливість опанувати технології штучного інтелекту та перетворити знання в практику. Ви здобудете не просто теорію, а реальні навички розробки AI-рішень у машинному навчанні, NLP, CV, Big Data та багато іншого.
          </p>
        </div>

        {/* Здобудете */}
        <div className="about-card">
          <h2 className="card-title">📚 Що ви здобудете</h2>
          <ul className="custom-list">
            <li>Машинне навчання, NLP, комп’ютерний зір</li>
            <li>AI-бібліотеки: TensorFlow, PyTorch, OpenCV тощо</li>
            <li>Хмарні сервіси: AWS, Azure, GCP</li>
            <li>Інженерія даних, етика AI, візуалізація</li>
            <li>Мікроконтролери: Arduino, Jetson, Raspberry</li>
            <li>Soft Skills: командна робота, презентації, управління</li>
          </ul>
        </div>

        {/* Кар'єра */}
        <div className="about-card">
          <h2 className="card-title">🚀 Кар’єрні можливості</h2>
          <ul className="custom-list">
            <li>Data Scientist / AI Engineer</li>
            <li>NLP / Computer Vision Engineer</li>
            <li>Robotics / Big Data Engineer</li>
            <li>AI Product Manager</li>
            <li>AI Researcher / Ethics Specialist</li>
          </ul>
        </div>

      </div>

      <div className="btn-map__wrapper">
        <a
          href="https://aidept.com.ua/course-cards"
          className="btn-map gradient-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Карта навчальних курсів</span>
        </a>
      </div>
    </section>
  );
};

export default About;
