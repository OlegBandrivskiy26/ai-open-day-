import About from "./components/About";
import Clubs from "./components/Clubs";
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
import './styles/app.css'

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <FullscreenCarousel/> */}
      <About/>
      {/* <ImagesCarusel/> */}
      {/* <TimeLine/> */}
      {/* <Clubs/> */}

      <Lecturers/>
      <StudentTestimonial/>
      <Initiatives/>
      <LeaderTestimonial
        name="Наталія Мельникова"
        position="Завідувачка кафедри СШІ"
        imageClass="melnykova"
        gradientClass="gradient-purple"
        text="Кафедра систем штучного інтелекту є потужним освітньо-науковим осередком, що створює унікальне середовище для розвитку талантів у сфері AI та ІТ. Вона активно впроваджує інноваційні моделі навчання, поєднуючи академічну підготовку з практичною взаємодією з ІТ-індустрією."
      />
      <LeaderTestimonial
        name="Наталія Шаховська"
        position="Завідувачка кафедри систем ШІ, кураторка програми AI"
        imageClass="shakhovska"
        gradientClass="gradient-purple"
        text="Штучний інтелект – це тренд, який за прогнозами світових аналітичних компаній до 2050 року стане звичним явищем у повсякденному житті. Наші випускники отримують ґрунтовні знання, які вміють застосувати на практиці."
      />
      <Sponsors/>
      <Footer/>
    </div>
  );
}

export default App;
