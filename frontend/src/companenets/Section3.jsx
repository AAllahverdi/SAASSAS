// import React from 'react'
import "./Section3.scss"
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

function Section3() {
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
    <SwiperSlide className="swipper2__in">
    <div className="swipper2__out">
        <div className="swipper2__out_2">
        <div className="salam">
        <p className="salam" >Custemers Say</p>
        </div>
           <div>
           <img src="https://preview.colorlib.com/theme/pato/images/avatar-01.jpg" alt=""/>
           </div>
            <h2>REWIEW</h2>
            <p>we are  lorem ara not yo ejja e jhdwunji whendniwd lorem iopsum lorem ipsin wdjjxasjdw jm </p>
        </div>
    </div>
    </SwiperSlide>
    <SwiperSlide className="swipper2__in">
    <div className="swipper2__out">
        <div className="swipper2__out_2">
            <div className="salam">
            <p className="salam" >Custemers Say</p>
            </div>
           <div>
           <img src="https://preview.colorlib.com/theme/pato/images/avatar-01.jpg" alt=""/>
           </div>
            <h2>REWIEW</h2>
            <p>we are  lorem ara not yo ejja e jhdwunji whendniwd lorem iopsum lorem ipsin wdjjxasjdw jm </p>
        </div>
    </div>
    </SwiperSlide>
    
  </Swiper>
    </div>
  )
}

export default Section3