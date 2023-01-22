import React from 'react';
import { MdOutlineEmojiEvents } from 'react-icons/md';
import { RiCake2Line } from 'react-icons/ri';
import { TbMicrophone2 } from 'react-icons/tb';
import image from '../../../Images/Group 21 (4).png';

const Featured = () => {
    const featured = [
        {
            _id: 1,
            icon: <RiCake2Line className='text-4xl'/>,
            title: 'Birthday Parties',
            param: 'Sit amet consectetur elit sed lusm tempor incidant temdore ut labore dolore  lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore.'
        },
        {
            _id: 2,
            icon: <TbMicrophone2 className='text-4xl'/>,
            title: 'Corporate Seminars',
            param: 'Sit amet consectetur elit sed lusm tempor incidant temdore ut labore dolore lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore.'
        },
        {
            _id: 3,
            icon: <MdOutlineEmojiEvents className='text-4xl'/>,
            title: 'Award Ceremony',
            param: 'Sit amet consectetur elit sed lusm tempor incidant temdore ut labore dolore lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore.'
        },
    ]
    return (
       
        <div className='relative'>
        <img src={image} className='relative' alt="" />
        <div className='absolute w-full px top-20 flex justify-center lg:flex-row flex-col'>
            <div className=''>
            <h2 className='text-white text-xl mt-2'>With a full range of Event Planning Services, our Clients have Successful & Prosperous Events!</h2>
            <h2 className='text-gray-300'>We make your events smart & impactful by personalised event management services.</h2>
            </div>
        </div>
        <div className='absolute w-full px-8 lg:px-36 top-72 flex justify-center gap-40  lg:flex-row flex-col'>
            <div className='text-white'>
            <h2 className='text-4xl font-semibold mb-4'><span className='text-purple-600'>Services </span> Featured</h2>
            <h2 className='mb-6 text-[18px]'>We make your events smart & impactful by personalised event management services.</h2>
            <p className='text-gray-100 text-[16px]'>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ex ea consequat duis aute irure dolor in reprehenderit in voluptate labore et dolore.</p>
            </div>
            <div className=''>
               {
                featured.map(item => 
                    <div className="mb-6">
               <div className="flex items-center gap-6 text-white text-2xl mb-2">
                <div className='flex items-center gap-2'>
                {item.icon}
               <div className='border-b-[3px] w-[20px] border-purple-600'></div>
                </div>
            <h2 className=''>{item.title}</h2>
               </div>
               <p className='text-white'>Sit amet consectetur elit sed lusm tempor incidant temdore ut labore dolore lorem ipsum dolor sit amet consectetur adipisicing elit sed do , eiusmod tempor incididunt ut labore et dolore.</p>
               </div>
                    )
               }
            </div>
        </div>
         </div>
    );
};

export default Featured;