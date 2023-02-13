import React from 'react';
import Swiper, { Pagination } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import image1 from '../Images/ServiceImages/people1.png';
import image2 from '../Images/ServiceImages/people2.png';
import image3 from '../Images/ServiceImages/people3.png';
import RatingSystem from './Rating';

const Review = () => {
    const data = [
        {
            id: 1,
            image: image1,
            title: 'Jeo Meal',
        },
        {
            id: 2,
            image: image2,
            title: 'Rose Nell',
        },
        {
            id: 3,
            image: image3,
            title: 'Geo Ema',
        },
    ]
    return (
        <div className="px-8 lg:px-36 mt-32">
        <h1 className='text-white text-2xl mb-3 lg:text-4xl font-bold'>Reviews</h1>
            <div className=" max p-4 space-x-4">

                <div className="flex items-center justify-evenly gap-20">
                    {
                        data.map(item =>
                            <div key={item._id}>
                                <div class="avatar">
                                    <div class="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={item.image} />
                                    </div>
                                </div>

                                <h2 className='text-[18px] my-2 font-semibold text-primary'>{item.title}</h2>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, ipsum</span>
                                <RatingSystem />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Review;