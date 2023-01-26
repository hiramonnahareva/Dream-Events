import React from 'react';
import {  Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import banner from '../Images/ServiceImages/banner.png';

const data = [
    {
        _id: 1,
        title: 'title',
        review: 'lorem',
    },
    {
        _id: 2,
        title: 'title1',
        review: 'lorem',
    },
    {
        _id: 3,
        title: 'title4',
        review: 'lorem',
    },
    {
        _id: 4,
        title: 'title title',
        review: 'lorem',
    },
]
const Review = () => {
    
    return (
           <div
           style={{
            backgroundImage: `url(${banner})`,
          }}
           className='h-96 my-32'>
             <div className='mx-32'>
             <Swiper    
             slidesPerView={1} slidesPerRow={1}
              autoplay={{
                delay: 2500,
                
              }}
                // effect={"fade"}           
                height={100}
                direction={"vertical"}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
        
      >
        {
          data.map(({_id, title, review}) => 
          <div key={_id}>
        <SwiperSlide>
           <div height={100}>
             <h2 className='text-3xl text-center text-white'>{title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem excepturi provident dolore tempora adipisci earum, et nihil nisi ipsam minima mollitia obcaecati aperiam perferendis, qui ab repellat minus, voluptatibus eaque.</p>
           </div>
          </SwiperSlide>
          </div>
           )
          }
      </Swiper>
             </div>
           </div>
      // <VarticalSlider/>
    );
};

export default Review;

