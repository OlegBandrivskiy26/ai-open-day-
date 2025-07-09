import { useEffect, useRef, useState } from 'react';
import About from "./components/About";
import CareerOpportunities from "./components/CareerOpportunities";
import Clubs from "./components/Clubs";
import EducationProgram from "./components/EducationProgram";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ImagesCarusel from "./components/ImagesCarusel";
import Initiatives from "./components/Initiatives";
import Lecturers from "./components/Lecturers";
import Sponsors from "./components/Sponsors";
import StudentTestimonial from "./components/StudentTestimonial";
import LeaderTestimonial from "./components/Testimonials";
import TimeLine from "./components/TimeLine";
import FullscreenCarousel from "./components/WelcomeScreen";
import WelcomeScreen from "./components/WelcomeScreen";
import './styles/app.css';

// ✅ Додаємо AutoSlider прямо тут
const AutoSlider = ({ children }) => {
  const [index, setIndex] = useState(0);
  const totalSlides = children.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 7500);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="testimonial-wrapper">
      <div
        className="testimonial-inner"
        style={{
          transform: `translateX(-${index * 100}%)`,
          display: 'flex',
          transition: 'transform 1s ease-in-out',
          width: '100%',
        }}
      >
        {children}
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Header />
      <EducationProgram />
      <About />

      {/* ✅ Вставлено плавне слайд-шоу */}
      <AutoSlider>
        <LeaderTestimonial
          name="Наталія Мельникова"
          position="Завідувачка кафедри СШІ"
          imageClass="melnykova"
          gradientClass="gradient-purple"
          text="Кафедра систем штучного інтелекту є потужним освітньо-науковим осередком, що створює унікальне середовище для розвитку талантів у сфері AI та ІТ. Вона активно впроваджує інноваційні моделі навчання, поєднуючи академічну підготовку з практичною взаємодією з ІТ-індустрією."
        />
        <LeaderTestimonial
          name="Наталія Шаховська"
          position="Ректор, кураторка програми AI"
          imageClass="shakhovska"
          gradientClass="gradient-purple"
          text="Штучний інтелект – це тренд, який за прогнозами світових аналітичних компаній до 2050 року стане звичним явищем у повсякденному житті. Наші випускники отримують ґрунтовні знання, які вміють застосувати на практиці."
        />
      </AutoSlider>

      <Initiatives />
      {/* <ImagesCarusel /> */}
      {/* <TimeLine /> */}
      {/* <Clubs /> */}
      <Lecturers />
      <StudentTestimonial />
      <CareerOpportunities />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default App;
