import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



export default ()=>{
    return (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <img src="images/nio-et5.jpg" style={{width:"100%"}}/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/aston-martin.jpg" style={{width:"100%"}}/>
          </SwiperSlide>
          <SwiperSlide><img src="images/audi-rs-e-tron-gt.jpg" 
            style={{width:"100%"}}
          /></SwiperSlide>
          <SwiperSlide><img src="images/maserati-mc20.jpg"
            style={{width:"100%"}}
          /></SwiperSlide>
          
        </Swiper>
      );
}