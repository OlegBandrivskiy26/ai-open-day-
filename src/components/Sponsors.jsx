import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/sponsors.css"

const Sponsors = () => {
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
                breakpoint: 768, 
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 480, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false,
                }
            }
        ]
    };

    return (
        <div className="sponsors" id='sponsors'>
            <div className="slider-container">
                <Slider {...settings}>
                    <div><div className='sponsors__img sponsors__img1'></div></div>
                    <div><div className='sponsors__img sponsors__img2'></div></div>
                    <div><div className='sponsors__img sponsors__img3'></div></div>
                    <div><div className='sponsors__img sponsors__img4'></div></div>
                    <div><div className='sponsors__img sponsors__img5'></div></div>
                    <div><div className='sponsors__img sponsors__img6'></div></div>
                    <div><div className='sponsors__img sponsors__img7'></div></div>
                    <div><div className='sponsors__img sponsors__img8'></div></div>
                    <div><div className='sponsors__img sponsors__img9'></div></div>
                    <div><div className='sponsors__img sponsors__img10'></div></div>
                    <div><div className='sponsors__img sponsors__img11'></div></div>
                    <div><div className='sponsors__img sponsors__img12'></div></div>
                    <div><div className='sponsors__img sponsors__img13'></div></div>
                    <div><div className='sponsors__img sponsors__img14'></div></div>                   
                    <div><div className='sponsors__img sponsors__img15'></div></div>
                </Slider>
            </div>

            <div className="sponsors-btn-wrapper">
                 <a 
          href="https://vstup.osvita.ua/y2024/r14/97/1321234/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="gradient-button header-btn"
        >
          Подати заяву Бакалаврам
        </a>
        <a 
          href="https://vstup.osvita.ua/y2024/r14/97/1340189/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="gradient-button header-btn"
        >
          Подати заявку Магістрам
        </a>
            </div>
        </div>
    )
}

export default Sponsors;
