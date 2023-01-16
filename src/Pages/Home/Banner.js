import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import image from '../../Images/ServiceImages/Group 13.png';
import image1 from '../../Images/ServiceImages/Group 12.png';
import image2 from '../../Images/ServiceImages/Group 14.png';
import image3 from '../../Images/ServiceImages/Group 15.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import {Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import Aos from 'aos';

const Banner = () => {
  useEffect(()=> {
    Aos.init({duration: 1000});
}, [])

  const data = [
   {
     _id: 1,
     img: image,
    subTitle: "Birthday Event Management Specialists",
    title: "CELEBRATE YOUR EVENTSTHAT LASTS LONGER",
  },
   {
     _id: 2,
     img: image1,
    subTitle: "We are the Event Management Specialists",
    title: "WE PERSONALIZE YOUR WEDDING EVENTS",
  },
   {
     _id: 3,
     img: image2,
    subTitle: "Birthday Event Management Specialists",
    title: "CELEBRATE YOUR EVENTSTHAT LASTS LONGER",
  },
   {
     _id: 4,
     img: image3,
    subTitle: "We are the Event Management Specialists",
    title: "WE PERSONALIZE YOUR WEDDING EVENTS",
  },
          
  ]
    return (
        <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, EffectFade, Pagination, Navigation]}
          className="mySwiper"
        >
         {
         data.map(item => 
          <SwiperSlide>
            <img className='relative' src={item.img} />
            <div data-aos="fade-right" className='absolute top-52'> 
            <div className='text-center mx-60'>
            <i className='text-[18px] pb-12 text-white'>{item.subTitle}</i>
            <h2 className='text-6xl mt-10 font-bold text-white'>{item.title}</h2>
            </div>
            </div>

          </SwiperSlide>
          )}
          
        </Swiper>
      </>
    );
};

export default Banner;