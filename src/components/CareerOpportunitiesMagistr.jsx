import React from 'react';
import '../styles/career.css';

const careerList = [
  '🧱 Associate Technical Architect',
  '🏗️ Technical Architect',
  '🎯 Solutions Architect',

  '🔬 AI – Associate R&D Engineer',
  '🧪 AI – R&D Engineer',
  '🧠 AI – Expert R&D Engineer',

  '👨‍💻 Associate Technical Lead',
  '💼 Technical Lead',
  '📊 Senior Technical Lead',
  '📐 Engineering Manager',

  '💻 Software Engineer',
  '🧑‍🔧 Senior Software Engineer'
];

const CareerOpportunitiesMagistr = () => {
  return (
    <section className="career-section gradient-purple">
      <div className="career-wrapper">
        <h2 className="career-title">Кар’єрні можливості</h2>
        <p className="career-description">
          Ви зможете побудувати кар'єру в одному з технічних або управлінських напрямів — від Software Engineer до Engineering Manager або Solutions Architect.
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

export default CareerOpportunitiesMagistr;
