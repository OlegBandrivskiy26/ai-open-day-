import React from 'react'
import "../styles/clubs.css"

const Clubs = () => {
  return (
    <section className="clubs" id='clubs'>
        <h1 className="clubs-title">Гуртки від кафедри</h1>
        <div className="clubs-container">
            <div className="clubs-content-container">
                <div className="clubs-img-container">
                    <div className="clubs-img"></div>
                </div>
                <div className="clubs-txt-container">
                    <h1 className="clubs-title-txt">Title</h1>
                    <p className="clubs-desc-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum odio modi corporis tenetur aspernatur nobis eveniet distinctio officiis reprehenderit ut maiores ex earum, delectus dolorum officia temporibus velit sapiente molestias?</p>
                </div>
            </div>
            <div className="clubs-content-container">
                <div className="clubs-txt-container clubs-txt-start">
                    <h1 className="clubs-title-txt clubs-title-start">Title</h1>
                    <p className="clubs-desc-txt clubs-desc-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum odio modi corporis tenetur aspernatur nobis eveniet distinctio officiis reprehenderit ut maiores ex earum, delectus dolorum officia temporibus velit sapiente molestias?</p>
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
                    <p className="clubs-desc-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum odio modi corporis tenetur aspernatur nobis eveniet distinctio officiis reprehenderit ut maiores ex earum, delectus dolorum officia temporibus velit sapiente molestias?</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Clubs
