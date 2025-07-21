import React from 'react';
import Slider from 'react-slick';
import '../styles/studentTestimonials.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../styles/lecturers.css";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const lecturers = [
  { name: 'Наталія Шаховська', title: 'Засновниця кафедри СШІ, ректорка НУЛП', imgClass: 'lecturer-img5' },
  { name: 'Наталія Мельникова', title: 'Завідувачка кафедри СШІ', imgClass: 'lecturer-img10' },
  { name: 'Іван Загородній', title: 'Куратор програми AI, SoftServe', imgClass: 'lecturer-img1' },
  { name: 'Євген Засоба', title: 'CTO at Somatic', imgClass: 'lecturer-img2' },
  { name: 'Андрій Бойчук', title: 'Head of AI, blackthorn.ai', imgClass: 'lecturer-img3' },
  { name: 'Олександр Гурбич', title: 'CEO/Founder, blackthorn.ai', imgClass: 'lecturer-img4' },
  { name: 'Олексій Шамуратов', title: 'Data Engineer, Brainstack_', imgClass: 'lecturer-img6' },
  { name: 'Олександр Пшеничний', title: 'Solutions Architect in LeoBit', imgClass: 'lecturer-img7' },
  { name: 'Олексій Сивоконь', title: 'Principal Scientist, Microsoft', imgClass: 'lecturer-img8' },
  { name: 'Яцишин Володимир', title: 'CEO, GeeksCode', imgClass: 'lecturer-img9' },
  { name: 'Мартьянов Дмитро', title: 'COO, Pecode OU', imgClass: 'lecturer-img11' },
  { name: 'Владислав Михайлишин', title: 'R&D Manager, ChargeAfter', imgClass: 'lecturer-img12' },
  { name: 'Віталій Яковина', title: 'Гарант освітньої програми, Професор, д.т.н.', imgClass: 'lecturer-img13' },
  { name: 'Наталія Бойко', title: 'Заступниця завідувача кафедри, кандидат економічних наук, доцент', imgClass: 'lecturer-img14' },
  { name: 'Іван Ізонін', title: 'Доцент, кандидат технічних наук', imgClass: 'lecturer-img15'},
  { name: 'Олег Томашевський', title: 'Доцент, кандидат технічних наук', imgClass: 'lecturer-img16'},
  { name: 'Христина Якимишин', title: 'Асистент', imgClass: 'lecturer-img17'},
  { name: 'Андрій Барна', title: 'Асистент', imgClass: 'lecturer-img18'},
  { name: 'Андрій Бойчук', title: 'Асистент', imgClass: 'lecturer-img19'},
  { name: 'Богдан Худоба', title: 'Асистент, Доктор філософії комп\'ютерних наук', imgClass: 'lecturer-img20'},
  { name: 'Дмитро Пелешко', title: 'Лектор, Доктор технічних наук, професор', imgClass: 'lecturer-img21'},
  { name: 'Ірина Швороб', title: 'Асистент, Кандидат технічних наук', imgClass: 'lecturer-img22'},
  { name: 'Роман Камінський', title: 'Лектор, Доктор технічних наук, професор', imgClass: 'lecturer-img23'},
  { name: 'Леся Мочурад', title: 'Доцент, Кандидат технічних наук', imgClass: 'lecturer-img24'},
  { name: 'Ярослав Матвійчук', title: 'Лектор, Доктор технічних наук, професор', imgClass: 'lecturer-img25'},
  { name: 'Олег Басистюк', title: 'Асистент, Магістр комп’ютерних наук', imgClass: 'lecturer-img26'},
  { name: 'Оксана Пелещишин', title: 'Асистент, Кандидат технічних наук', imgClass: 'lecturer-img27'},
  { name: 'Олександр Ковальчук', title: 'Асистент, Магістр кафедри СШІ', imgClass: 'lecturer-img28'},
  { name: 'Олена Вовк', title: 'Заступниця завідувача кафедри, Кандидат технічних наук', imgClass: 'lecturer-img30'},
  { name: 'Павло Горун', title: 'Асистент, Кандидат фізико-математичних наук', imgClass: 'lecturer-img31'},
  { name: 'Роман Гасько', title: 'Старший викладач', imgClass: 'lecturer-img32'},
  { name: 'Соломія Лясковська', title: 'Доцент, Кандидат технічних наук', imgClass: 'lecturer-img33'},
  { name: 'Віктор Хавалко', title: 'Доцент, Кандидат технічних наук', imgClass: 'lecturer-img34'},
  { name: 'Володимир Шиманський', title: 'Доцент, Кандидат технічних наук', imgClass: 'lecturer-img35'},
  { name: 'Ярослав Виклюк', title: 'Лектор, Доктор технічних наук, професор', imgClass: 'lecturer-img36'},
  { name: 'Юрій Кривенчук', title: 'Доцент, Кандидат технічних наук', imgClass: 'lecturer-img37'},
  { name: 'Ростислав Косаревич', title: 'Професор, Доктор технічних наук, старший науковий співробітник', imgClass: 'lecturer-img38'},
];
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

const Lecturers = () => {
  const settings = {
    dots: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="lecturers" id="lecturers">
      <h1 className="lecturers-title">Наші викладачі</h1>
      <Slider {...settings}>
        {lecturers.map((lecturer, index) => (
          <div key={index} className="lecturer-slide">
            <div className="lecturer">
              <div className={`lecturer-img ${lecturer.imgClass}`}></div>
              <h3 className="lecturer-name">
                {lecturer.name}<br />
                <span>{lecturer.title}</span>
              </h3>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Lecturers;
