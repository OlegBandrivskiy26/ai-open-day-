import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../styles/image-carusel.css"

const ImagesCarusel = () => {
  const settings = {
    dots: true,         
    infinite: true,     
    speed: 500,          
    slidesToShow: 1,     
    slidesToScroll: 1,   
    autoplay: true,       
    autoplaySpeed: 3000,  
  };

  return (
    <section className='images' id='students' style={{ width: '80%', margin: '0 auto' }}>
        <h1 className='title-carusel-images'>Наші студенти</h1>
        <Slider {...settings}>
            <div className="slide slide1">

            </div>
            <div className="slide slide2">
            </div>
            <div className="slide slide3">
            </div>
            <div className="slide slide4">
            </div>
        </Slider>
    </section>
  );
}

export default ImagesCarusel;
