import React from 'react';
import '../styles/studentTestimonials.css';

import orzaImg from '../img/Orza.jpg';
import bandrivskiyImg from '../img/bandrivskiy.jpg';
import mirchukovaImg from '../img/mirchukova.jpg';
import tarasovImg from '../img/tarasov.jpg';

const StudentTestimonials = () => {
  const students = [
    {
      name: 'Євгеній Орза',
      status: 'Студент кафедри СШІ, 3 курс',
      image: orzaImg,
      text: `Кафедра систем штучного інтелекту реально відкриває багато можливостей для студентів. Викладачі діляться не лише теорією, а й живими кейсами з ІТ-індустрії — це дуже допомагає зрозуміти, як усе працює на практиці. Є багато напрямків для розвитку, тож кожен може знайти щось своє. А ще круто, що з підтримкою кафедри реально можна запустити власний стартап або розвивати авторський ІТ-проєкт.`
    },
    {
      name: 'Бандрівський Олег',
      status: 'Студент кафедри СШІ, 3 курс',
      image: bandrivskiyImg,
      text: `Навчаючись на кафедрі Систем Штучного Інтелекту, я відчув, наскільки це правильне рішення для мого майбутнього. Тут я не просто здобуваю знання, а й розкриваю свій потенціал у сфері, яка стрімко розвивається й має величезне значення для світу.

Кожен день відкриває переді мною нові можливості: участь у дослідницьких проєктах, хакатонах, практичне застосування знань у програмуванні, машинному навчанні, аналізі даних. Викладачі завжди готові підтримати, поділитися досвідом і надихнути. Тут я навчився не боятись складних завдань, а навпаки — бачити в них виклики, які ведуть до зростання.

Я щиро радий, що став частиною цієї спільноти — кафедра Штучного Інтелекту стала для мене місцем, де починається моя кар'єра майбутнього.`
    },
    {
      name: 'Ліліана Мірчукова',
      status: 'Студентка кафедри СШІ, 4 курс',
      image: mirchukovaImg,
      text: `Кафедра СШІ для мене — це можливості, крутий нетворкінг і розвиток.
Треба справді багато вчитись, бути активним і використовувати всі можливості, які дає кафедра. І тоді — все буде!

Найбільше мене заряджає саме атмосфера: тут хочеться ставати кращим, бо бачиш, як ростуть інші. Дуже ціную те, що тут підтримують студентські ініціативи. Справді відчувається, що нас чують.

Я ні разу не пошкодувала про свій вибір. Навпаки — що далі, то більше впевненості, що я там, де треба.`
    },
    {
      name: 'Андрій Тарасов',
      status: 'Випускник кафедри СШІ',
      image: tarasovImg,
      text: `Навчаючись на кафедрі СШІ ви зможете ознайомитись з різними напрямками у галузі комп'ютерних наук. Навчитесь застосовувати засоби штучного інтелекту для вирішення різноманітних завдань та отримаєте досвід роботи над реальними проєктами. Викладачі кафедри допомагають реалізувати власні ідеї та дослідження у галузі штучного інтелекту.`
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
