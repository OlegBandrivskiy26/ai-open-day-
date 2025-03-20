// import React from 'react';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import "../styles/fullscreen-carousel.css"; 

// const FullscreenCarousel = () => {
//   const settings = {
//     dots: true,         
//     infinite: true,     
//     speed: 500,         
//     slidesToShow: 1,    
//     slidesToScroll: 1,  
//     autoplay: true,    
//     autoplaySpeed: 3000
//   };

//   return (
//     <section className='carousel' id='students'>
//         <Slider {...settings}>
//             <div className="slide slide-full-1"></div>
//             <div className="slide slide-full-2"></div>
//             <div className="slide slide-full-3"></div>
//             <div className="slide slide-full-4"></div>
//             <div className="slide slide-full-5"></div>
//             <div className="slide slide-full-6"></div>
//             <div className="slide slide-full-7"></div>
//         </Slider>
//     </section>
//   );
// };

// export default FullscreenCarousel;


import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../styles/fullscreen-carousel.css"; 

const FullscreenCarousel = () => {
  const settings = {
    dots: true,         
    infinite: true,     
    speed: 500,         
    slidesToShow: 1,    
    slidesToScroll: 1,  
    autoplay: true,    
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className='carousel' id='students'>
        <Slider {...settings}>
            <div className="slide slide-full-1"></div>
            <div className="slide slide-full-2"></div>
            <div className="slide slide-full-3"></div>
            <div className="slide slide-full-4"></div>
            <div className="slide slide-full-5"></div>
            <div className="slide slide-full-6"></div>
            <div className="slide slide-full-7"></div>
        </Slider>
    </section>
  );
};

export default FullscreenCarousel;
