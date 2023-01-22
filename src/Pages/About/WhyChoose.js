import React from 'react';
import { MdOutlineEmojiEvents } from 'react-icons/md';
import { RiCake2Line } from 'react-icons/ri';
import { TbMicrophone2 } from 'react-icons/tb';
import image from '../../Images/ServiceImages/birthday-2.jpg';

const WhyChoose = () => {

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
        <div className='bg-gray-100 mt-20'>
             {/* ---- left section ---- */}
        <div className=' w-full flex justify-center items-center gap-20 lg:flex-row flex-col'>
            <div className='lg:pl-40'>
            <h2 className='text-4xl font-semibold mb-4'><span className='text-purple-600'>Services </span> Featured</h2>
            <h2 className='mb-6 text-[18px]'>We make your events smart & impactful by personalised event management services.</h2>
               {
                featured.map(item => 
                    <div className="my-10">
               <div className="flex items-center gap-6 text-2xl mb-2">
                <div className='flex items-center gap-2'>
                {item.icon}
               <div className='border-b-[3px] w-[20px] border-purple-600'></div>
                </div>
            <h2 className=''>{item.title}</h2>
               </div>
               <p className='mt-4'>Sit amet consectetur elit sed lusm tempor incidant temdore ut labore dolore lorem ipsum dolor sit amet consectetur adipisicing elit sed do , eiusmod tempor incididunt ut labore et dolore.</p>
               </div>
                    )
               }
            </div>
             {/* ---- Right section ---- */}
            <div className='w-full'>
            <img className='' src={image} alt="" />
        </div>
        </div>
        </div>
    );
};

export default WhyChoose;