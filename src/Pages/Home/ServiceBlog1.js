import React from 'react';
import { HiArrowRightOnRectangle } from 'react-icons/hi2';
import image from '../../Images/Group 16 (1).png';

const ServiceBlog1 = () => {
    const list = [
        {
            _id: 1,
            text: 'orem ipsum dolor sit, amet consectetur.'
        },
        {
            _id: 2,
            text: 'amet consectetur. orem ipsum dolor sit'
        },
        {
            _id: 3,
            text: 'orem ipsum dolor sit, amet consectetur.'
        },
        {
            _id: 4,
            text: 'amet consectetur norem ipsum dolor sit'
        },
    ]
    return (
        <div className='lg:flex lg:m-32 m-10 gap-10 items-center justify-center'>
            <div className='flex-1 '>
                <h2 className='text-4xl font-bold mb-10'><span className='text-purple-600'>Birthday</span> Event</h2>
                <p className='mb-5  pr-32'>An event description is copy that aims to tell your potential attendees what will be happening at the event, who will be speaking, and what they will get out of attending. Good event descriptions can drive attendance to events and also lead to more media coverage.</p>
                {
                    list.map(item => 
                        <div key={item._id} className="flex mt-4 gap-2 items-center">
                <HiArrowRightOnRectangle className='text-primary'/>
                <span>{item.text}</span>
                </div>
                        )}
                
            </div>
            <div className=''>
                <img src={image} width='450px' alt="" />
            </div>
            
        </div>
    );
};

export default ServiceBlog1;