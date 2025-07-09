import React from 'react';
import '../styles/studentTestimonials.css';

import orzaImg from '../img/Orza.jpg';
import bandrivskiyImg from '../img/bandrivskiy.jpg';
import mirchukovaImg from '../img/mirchukova.jpg';
import tarasovImg from '../img/tarasov.jpg';
import millImg from '../img/mill.jpg'
import veretulynkImg from '../img/veretulynuk.jpg'
const StudentTestimonials = () => {
  const students = [
    {
      name: 'Андрій Тарасов',
      status: 'Випускник кафедри СШІ',
      image: tarasovImg,
      text: `Навчаючись на кафедрі СШІ ви зможете ознайомитись з різними напрямками у галузі комп'ютерних наук. Навчитесь застосовувати засоби штучного інтелекту для вирішення різноманітних завдань та отримаєте досвід роботи над реальними проєктами. Викладачі кафедри допомагають реалізувати власні ідеї та дослідження у галузі штучного інтелекту.`
    },
    {
        name: 'Віталій Мілл',
        status: 'Випускник кафедри СШІ',
        image: millImg,
        text: `Для мене найважливішими є люди. Я вважаю, що оточення формує особистість, і на цій кафедрі є саме ті люди, серед яких хочеться рости та розвиватись. Навчання дійсно комплексне - необхідно добре вчити теорію та вміти її застосовувати на практиці. Особисто для мене найважчою частиною навчання був перший курс - багато нових процесів у які потрібно влитись. Проте чим далі - тим легше і цікавіше`
      }
  ];

  return (
    <section className="students-section" id="students">
      <h2 className="students-title">Відгуки студентів</h2>
      <div className="students-container">
        {students.map((s, i) => (
          <div key={i} className="student-block">
            <img src={s.image} alt={s.name} className="student-img" />
            <div className="student-info">
              <h3>{s.name}</h3>
              <p className="student-status">{s.status}</p>
              <p className="student-text">
                {s.text.split('\n').map((line, idx) => (
                  <span key={idx}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StudentTestimonials;
