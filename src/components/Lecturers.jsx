import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/lecturers.css";

const lecturers = [
  { name: 'Наталія Шаховська', title: 'Засновниця кафедри СШІ, ректорка НУЛП', imgClass: 'lecturer-img5' },
  { name: 'Наталія Мельникова', title: 'Завідувачка кафедри СШІ', imgClass: 'lecturer-img10' },
  { name: 'Іван Загородній', title: 'Куратор програми AI, SoftServe', imgClass: 'lecturer-img1' },
  { name: 'Євген Засоба', title: 'CTO at Somatic', imgClass: 'lecturer-img2' },
  { name: 'Андрій Бойчук', title: 'Head of AI, blackthorn.ai', imgClass: 'lecturer-img3' },
  { name: 'Олександр Гурбич', title: 'CEO/Founder, blackthorn.ai', imgClass: 'lecturer-img4' },
  { name: 'Олексій Шамуратов', title: 'Data Engineer, Brainstack_', imgClass: 'lecturer-img6' },
  { name: 'Олександр Пшеничний', title: 'Топ 1 архітект України', imgClass: 'lecturer-img7' },
  { name: 'Олексій Сивоконь', title: 'Principal Scientist, Microsoft', imgClass: 'lecturer-img8' },
  { name: 'Яцишин Володимир', title: 'CEO, GeeksCode', imgClass: 'lecturer-img9' },
  { name: 'Мартьянов Дмитро', title: 'COO, Pecode OU', imgClass: 'lecturer-img11' },
  { name: 'Владислав Михайлишин', title: 'R&D Manager, ChargeAfter', imgClass: 'lecturer-img12' },
  { name: 'Віталій Яковина', title: 'Професор, д.т.н.', imgClass: 'lecturer-img13' },
];

const Lecturers = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
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
