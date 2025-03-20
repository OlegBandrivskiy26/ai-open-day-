import React from 'react'
import "../styles/clubs.css"

const Clubs = () => {
  return (
    <section className="clubs" id="clubs">
      <h1 className="clubs-title">Гуртки від кафедри</h1>
      <div className="clubs-container">
        <div className="clubs-content-container">
          <div className="clubs-img-container">
            <div className="clubs-img clubs-img1"></div>
          </div>
          <div className="clubs-txt-container">
            <h1 className="clubs-title-txt">Data Science Club</h1>
            <p className="clubs-desc-txt">
            Data Science Club це свого роду ком'юніті на нашій кафедрі, де ми збираємось раз на тиждень, щоб поділитись досвідом. 
            Особливість клубу полягає в тому, що ми не тільки організовуємо лекції, але і практичні воршопи, змагання, також, неформальні зустрічі. Також, в нашому клубі діє менторська програма, в якій перший та другий курс об'єднюються в команди для створення PET-проєктів під супроводом третього та четвертого курсу.
            Data Science Club обирай
            Нові знання для себе здобувай!
            </p>
          </div>
        </div>
        <div className="clubs-content-container">
          <div className="clubs-txt-container clubs-txt-start">
            <h1 className="clubs-title-txt clubs-title-start">Title</h1>
            <p className="clubs-desc-txt clubs-desc-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum odio modi corporis tenetur aspernatur nobis eveniet distinctio officiis reprehenderit ut maiores ex earum, delectus dolorum officia temporibus velit sapiente molestias?
            </p>
          </div>
          <div className="clubs-img-container">
            <div className="clubs-img"></div>
          </div>
        </div>
        <div className="clubs-content-container">
          <div className="clubs-img-container">
            <div className="clubs-img"></div>
          </div>
          <div className="clubs-txt-container">
            <h1 className="clubs-title-txt">Title</h1>
            <p className="clubs-desc-txt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum odio modi corporis tenetur aspernatur nobis eveniet distinctio officiis reprehenderit ut maiores ex earum, delectus dolorum officia temporibus velit sapiente molestias?
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clubs
