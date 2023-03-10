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
import BigBtn from '../../Component/BigBtn';
import BigOutlineBtn from '../../Component/BigOutlineBtn';

const Banner = () => {
  useEffect(()=> {
    Aos.init({duration: 1000});
}, [])

  const data = [
   {
     _id: 10,
     img: image,
    subTitle: "Birthday Event Management Specialists",
    title: "CELEBRATE YOUR EVENTSTHAT LASTS LONGER",
    btn1: "Ask for a quote",
    btn2: "Read more",
  },
   {
     _id: 11,
     img: image1,
    subTitle: "We are the Event Management Specialists",
    title: "WE PERSONALIZE YOUR WEDDING EVENTS",
    btn1: "Our Future",
  },
   {
     _id: 12,
     img: image2,
    subTitle: "Birthday Event Management Specialists",
    title: "CELEBRATE YOUR EVENTSTHAT LASTS LONGER",
    btn1: "Ask for a quote",
    btn2: "Read more",
    
  },
   {
     _id: 13,
     img: image3,
    subTitle: "We are the Event Management Specialists",
    title: "WE PERSONALIZE YOUR WEDDING EVENTS",
    btn1: "Our Future",
  },
          
  ]
    return (
        <>
        <Swiper
          spaceBetween={30}
          loop={true}
        loopFillGroupWithBlank={true}
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
         data.map(({_id, img, subTitle, title, btn1,btn2 }) => 
         <div key={_id}>
          <SwiperSlide>
            <img className='relative' src={img} />
            <div data-aos="fade-right" className='absolute lg:top-44 top-10'> 
            <div className='text-center lg:mx-60 ml-20'>
            <i className='lg:text-[18px] text-white'>{subTitle}</i>
            <h2 className='lg:text-6xl mt-6 font-bold text-white'>{title}</h2>
            <div className='flex justify-center mt-5'>
            <div className=' border-l-4 h-8 mb-4 border-purple-600'></div>
            </div>
            <div className='mt-7 flex gap-4 justify-center'>
            <BigBtn className='ml-9' title={btn1}/>
            {
              btn2 && <BigOutlineBtn title={btn2}/>
            }
            </div>
            </div>
            </div>

          </SwiperSlide>
          </div>
          )}
          
        </Swiper>
      </>
    );
};

export default Banner;