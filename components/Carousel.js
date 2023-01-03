import React from 'react'
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";


const Carousel = () => {
  return (
    <>
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      
      

      
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper bg-amber-100 rounded-sm py-10 "
    >
      <SwiperSlide style={{textAlign:"center"}} ><Image src='/NGO_WWh v2.jpg' width={1000} height={600}  alt='image1'  /></SwiperSlide>
        <SwiperSlide style={{textAlign:"center"}} ><Image src='/WhatsApp Image 2022-09-20 at 7.50.37 PM.jpeg' width={1000} height={600}  alt='image1'  /></SwiperSlide>
        <SwiperSlide style={{textAlign:"center"}} ><Image src='/WhatsApp Image 2022-09-20 at 7.52.56 PM.jpeg' width={1000} height={600}  alt='image1'  /></SwiperSlide>
        <SwiperSlide style={{textAlign:"center"}} ><Image src='/WhatsApp Image 2022-09-20 at 7.48.58 PM.jpeg' width={1000} height={600}  alt='image1'  /></SwiperSlide>
      
      
      <SwiperSlide style={{textAlign:"center"}} ><Image src='/a4103b0b-ad22-4cc8-ac49-7fa2fb2036b4.jpeg' width={1000} height={600} alt='image3' /></SwiperSlide>
      <SwiperSlide style={{textAlign:"center"}} ><Image src='/NGO-Registration.jpg' width={1000}height={600} alt='image4' /></SwiperSlide>
      
    </Swiper>

  </>
  )
}

export default Carousel
