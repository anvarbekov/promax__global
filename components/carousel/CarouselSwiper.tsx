"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

export default function App() {
  return (
    <div className='swiper__container mt-10'>
      <Swiper
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
        centeredSlides={true}
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        autoplay={{ delay: 5000 }} 
        speed={5000}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
        style={{zIndex: 0}}
      >
        <SwiperSlide>
          <img className='swiper__img' width={"100%"} height={"100%"} src="https://visor.ph/wp-content/uploads/2022/08/Firefly-2.jpg" alt="Banner 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='swiper__img' width={"100%"} height={"100%"} src="https://cdn.thewirecutter.com/wp-content/media/2023/09/doublestrollers-2048px-1010066-3x2-1.jpeg" alt="Banner 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='swiper__img' width={"100%"} height={"100%"} src="https://www.herocycles.com/on/demandware.static/-/Sites-HeroCycles-Library/default/dwc1ec20f5/Homepage/Topbanner/1920x1047Colt.jpg" alt="Banner 5" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
