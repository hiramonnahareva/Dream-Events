import React from 'react';
import { BsEmojiSmile, BsLightbulb } from 'react-icons/bs';
import { MdOutlineFiberSmartRecord } from 'react-icons/md';
import {HiOutlineLightBulb } from 'react-icons/hi2';
import { IoPeopleOutline } from 'react-icons/io5';
import Specialist from '../../Component/Service/Specialists/Specialist';

const DreamEvents = () => {
    const events = [
        {
            id: 1,
            image: <IoPeopleOutline className='text-4xl text-purple-600'/>,
            title: 'Great People',
            des: 'Aorem ipsum dolor sit amet consectetur elit sed lusm tempor incididunt ut labore et dolore mag aliqua enima minim veniam quis nostrud exercitation',
            btn: 'Read More',
        },
        {
            id: 2,
            image: <HiOutlineLightBulb className='text-4xl text-purple-600'/>,
            title: 'Great Ideas',
            des: 'Borem ipsum dolor sit amet consectetur elit sed lusm tempor incididunt ut labore et dolore mag aliqua enima minim veniam quis nostrud exercitation',
            btn: 'Read More',
        },
        {
            id: 3,
            image: <MdOutlineFiberSmartRecord className='text-4xl text-purple-600'/>,
            title: 'Great Services',
            des: 'Corem ipsum dolor sit amet consectetur elit sed lusm tempor incididunt ut labore et dolore mag aliqua enima minim veniam quis nostrud exercitation',
            btn: 'Read More',
        }
    ]
    return (
        <div className='container px-8 lg:px-36 mt-32'>
        <h2 className='text-center text-4xl font-semibold'>Welcome to <span className='text-purple-600'>Devnts</span></h2>
        <h4 className='text-center text-xl my-8'>From Wedding Functions to Birthday Parties or Corporate Events to Musical Functions, We <br /> offer full range of Events Management Services that scale to your needs & budget.</h4>
       <div className='grid lg:grid-cols-3'>
       {
            events.map(item => <Specialist key={item.id} specialist={item}></Specialist>)
        }
       </div>

    </div>
    );
};

export default DreamEvents;