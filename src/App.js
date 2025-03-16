import Clubs from "./components/Clubs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ImagesCarusel from "./components/ImagesCarusel";
import Lecturers from "./components/Lecturers";
import Sponsors from "./components/Sponsors";
import TimeLine from "./components/TimeLine";
import WelcomeScreen from "./components/WelcomeScreen";
import './styles/app.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <WelcomeScreen/>
      <ImagesCarusel/>
      <TimeLine/>
      <Clubs/>
      <Lecturers/>
      <Sponsors/>
      <Footer/>
    </div>
  );
}

export default App;
