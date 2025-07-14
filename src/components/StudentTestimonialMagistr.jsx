import React from 'react';
import Slider from 'react-slick';
import '../styles/studentTestimonials.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import orzaImg from '../img/Orza.jpg';
import bandrivskiyImg from '../img/bandrivskiy.jpg';
import mirchukovaImg from '../img/mirchukova.jpg';
import tarasovImg from '../img/tarasov.jpg';
import millImg from '../img/mill.jpg';
import veretulynkImg from '../img/veretulynuk.jpg';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Кастомні стрілки
const PrevArrow = ({ onClick }) => (
  <button className="arrow-btn prev" onClick={onClick}>
    <FaArrowLeft />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button className="arrow-btn next" onClick={onClick}>
    <FaArrowRight />
  </button>
);

const StudentTestimonials = () => {
  
const students = [
    {
      name: 'Андрій Тарасов',
      status: 'Випускник кафедри СШІ',
      image: tarasovImg,
      text: `Навчаючись на кафедрі СШІ ви зможете ознайомитись з різними напрямками у галузі комп'ютерних наук. Навчитесь застосовувати засоби штучного інтелекту для вирішення різноманітних завдань та отримаєте досвід роботи над реальними проєктами. Викладачі кафедри допомагають реалізувати власні ідеї та дослідження у галузі штучного інтелекту.`
    },
    {
        name: 'Віталій Міль',
        status: 'Випускник кафедри СШІ',
        image: millImg,
        text: `Для мене найважливішими є люди. Я вважаю, що оточення формує особистість, і на цій кафедрі є саме ті люди, серед яких хочеться рости та розвиватись. Навчання дійсно комплексне - необхідно добре вчити теорію та вміти її застосовувати на практиці. Особисто для мене найважчою частиною навчання був перший курс - багато нових процесів у які потрібно влитись. Проте чим далі - тим легше і цікавіше`
      }
  ];

  const settings = {
  dots: false,
  infinite: true,
  speed: 600,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};


  return (
    <section className="students-section" id="students">
      <h2 className="students-title">Відгуки студентів</h2>
      <Slider {...settings} className="students-carousel">
  {students.map((s, i) => (
    <div key={i}>
      <div className="slide-content">
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
    </div>
  ))}
</Slider>
    </section>
  );
};

export default StudentTestimonials;


