import React from 'react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import logo from '../../../Images/logo-1.jpg';
import logo1 from '../../../Images/logo-2.jpg';

const Brands = () => {
  const image = [
    {
      _id: 1,
      image: logo,
    },
    {
      _id: 2,
      image: logo1,
    },
    {
      _id: 2,
      image: logo,
    },
    {
      _id: 4,
      image: logo1,
    },
    {
      _id: 5,
      image: logo,
    },
    {
      _id: 6,
      image: logo1,
    },
  ]
  
    return (
      
        <div className="px-8 lg:px-36 mt-32">
        <div className=" max p-4 space-x-4">
  <div className="flex">
  <Swiper slidesPerView={3} slidesPerColumn={2} spaceBetween={30} pagination={{
  "clickable": true
}} className="mySwiper">
 
    {
      image.map(item => 
        <SwiperSlide>
        <img src={item.image} className="mx-12" />
      </SwiperSlide> 
        )
      }
      </Swiper>
  </div> 
</div>
</div>

    );
};

export default Brands;