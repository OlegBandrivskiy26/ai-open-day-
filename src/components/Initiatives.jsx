import React from 'react';
import '../styles/initiatives.css';

const initiatives = [
  {
    title: "Освітня програма з SoftServe",
    description:
      "Спільна програма дає змогу студентам здобувати знання безпосередньо від практиків, а також виконувати реальні проєктні завдання з експертами компанії.",
  },
  {
    title: "Проєктна форма навчання",
    description:
      "Курси включають реальні проєкти під менторством представників бізнесу, що формує практичні навички під потреби ринку.",
  },
  {
    title: "AI-Інкубатор",
    description:
      "Платформа для розвитку стартапів, досліджень і AI-продуктів. Студенти отримують менторство, ресурси і підтримку для реалізації ідей.",
  },
  {
    title: "Data Science Club",
    description:
      "Формується горизонтальна культура обміну знаннями. Старші студенти допомагають молодшим у машинному навчанні, аналітиці та AI.",
  },
  {
    title: "Robotics LAB",
    description:
      "Практична лабораторія для розробки робототехнічних рішень з використанням сенсорів, AI та сучасних платформ (Jetson, Raspberry Pi тощо).",
  },
  {
    title: "Дуальна освіта",
    description:
      "Поєднання навчання та практики в IT-компаніях. Студенти формують кар’єру вже під час навчання.",
  },
  {
    title: "Сильна команда викладачів",
    description:
      "Викладачі — це експерти з досвідом у проєктах і конференціях, які поєднують академічні та практичні знання і надихають студентів до інновацій.",
  },
];

const Initiatives = () => {
  return (
    <section className="initiatives" id="initiatives">
      <h1 className="initiatives-title">Ключові ініціативи кафедри</h1>
      <div className="initiatives-grid">
        {initiatives.map((item, index) => (
          <div className="initiative-card" key={index}>
            <div className="initiative-number">#{index + 1}</div>
            <h3 className="initiative-title">{item.title}</h3>
            <p className="initiative-description">{item.description}</p>
          </div>
        ))}
      </div>

      <p className="initiatives-conclusion">
        Кафедра СШІ формує не лише висококваліфікованих фахівців, а й інноваторів, дослідників та підприємців, готових створювати майбутнє штучного інтелекту.
      </p>
    </section>
  );
};

export default Initiatives;
