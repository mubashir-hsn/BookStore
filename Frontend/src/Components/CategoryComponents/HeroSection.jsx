import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './autoplaySlider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const HeroSection = () => {
  return (
    <>
    <div className="max-w-screen-2xl container mt-5 bg-base-100 mx-auto shadow-md">
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="/cover2.jpg" alt="Image" /></SwiperSlide>
        <SwiperSlide><img src="/cover.jpg" alt="Image" /></SwiperSlide>
        <SwiperSlide><img src="/cover1.jpg" alt="Image" /></SwiperSlide>
      </Swiper>
    </div>
    </>
  )
}

export default HeroSection