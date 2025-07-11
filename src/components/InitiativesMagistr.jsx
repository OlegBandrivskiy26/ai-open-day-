// Initiatives.jsx
import React from 'react';
import '../styles/initiatives.css';

const initiativesData = [
  {
    title: "Innovation Educational Platform",
    description: "Інноваційна освітня платформа для сучасного навчання."
  },
  {
    title: "База курсів для самостійного навчання",
    description: "Доступ до великої кількості матеріалів для індивідуального опрацювання."
  },
  {
    title: "Теоретичні & практичні Technical Leadership дисципліни",
    description: "Комбінація лідерства та технічної експертизи у курсах."
  },
  {
    title: "POC → Prototype → MVP: Building AI Solutions Step by Step",
    description: "Покроковий розвиток AI-рішень від концепту до MVP."
  },
  {
    title: "Постійне оновлення курсів",
    description: "Курси регулярно оновлюються відповідно до сучасних трендів."
  },
  {
    title: "Бізнес та наукові відрядження і поїздки",
    description: "Участь у поїздках для обміну досвідом у реальному середовищі."
  },
  {
    title: "Міжнародні сертифікації",
    description: "Підтвердження знань та навичок міжнародними стандартами."
  },
  {
    title: "Програма подвійних дипломів",
    description: "Можливість отримати диплом від кількох партнерських установ."
  }
];

const InitiativesMagistr = () => {
  return (
    <section className="initiatives">
      <h2 className="initiatives-title">Унікальні переваги навчання за розробленою програмою</h2>
      <div className="initiatives-grid">
        {initiativesData.map((item, index) => (
          <div key={index} className="initiative-card">
            <div className="initiative-number"># {index + 1}</div>
            <h3 className="initiative-title">{item.title}</h3>
            <p className="initiative-description">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="initiatives-conclusion">
        Ці можливості допомагають побудувати якісну кар’єру, отримати практичні знання, міжнародне визнання та досвід у реальному бізнес-середовищі.
      </div>
    </section>
  );
};

export default InitiativesMagistr;