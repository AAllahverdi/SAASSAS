// import React from 'react'
import "./Section1.scss"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
function Section1() {
  return (
    <div style={{marginTop:"30px"}}>
    <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
    className="mySwiper"
  >
    <SwiperSlide className="swipper__in"><img src="https://preview.colorlib.com/theme/pato/images/slide1-01.jpg.webp" alt=""/>
    <div className="swipper__out">
        <h1>Welcome to Pato</h1>
    </div>
    
    </SwiperSlide>
    <SwiperSlide><img src="https://preview.colorlib.com/theme/pato/images/master-slides-01.jpg.webp" alt=""/>
    <div className="swipper__out">
    <h1>Welcome to Pato</h1>
</div>
    </SwiperSlide>
    <SwiperSlide><img src="https://preview.colorlib.com/theme/pato/images/master-slides-02.jpg.webp" alt=""/>
    <div className="swipper__out">
    <h1>Welcome to Pato</h1>
</div>
    </SwiperSlide>
   
  </Swiper>
    </div>
  )
}

export default Section1