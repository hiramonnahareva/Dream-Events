import React from 'react';
import Specialist from './Specialist';
import {BsEmojiSmile} from 'react-icons/bs';
import {SlDiamond, SlEyeglass, SlMagicWand} from 'react-icons/sl';
import {MdOutlineFiberSmartRecord} from 'react-icons/md';
import {GoGift} from 'react-icons/go';

const Specialists = () => {
    const specialists = [
        {
            id: 1,
            image: <BsEmojiSmile className='text-4xl text-purple-600'/>,
            title: 'Anniversaries',
            des: 'Aorem ipsum dolor sit amet consectetur elit sed lusm tempor incididunt ut labore et dolore mag aliqua enima minim veniam quis nostrud exercitation',
        },
        {
            id: 2,
            image: <GoGift className='text-4xl text-purple-600'/>,
            title: 'Holiday Parties',
            des: 'Aorem ipsum dolor sit amet consectetur elit sed lusm tempor incididunt ut labore et dolore mag aliqua enima minim veniam quis nostrud exercitation',
        },
        {
            id: 3,
            image: <MdOutlineFiberSmartRecord className='text-4xl text-purple-600'/>,
            title: 'Corporate Functions',
            des: 'Aorem ipsum dolor sit amet consectetur elit sed lusm tempor incididunt ut labore et dolore mag aliqua enima minim veniam quis nostrud exercitation',
        },
        {
            id: 4,
            image: <SlMagicWand className='text-4xl text-purple-600'/>,
            title: 'Fashion Concerts',
            des: 'Aorem ipsum dolor sit amet consectetur elit sed lusm tempor incididunt ut labore et dolore mag aliqua enima minim veniam quis nostrud exercitation',
        },
        {
            id: 5,
            image: <SlEyeglass className='text-4xl text-purple-600'/>,
            title: 'Conference Planning',
            des: 'Aorem ipsum dolor sit amet consectetur elit sed lusm tempor incididunt ut labore et dolore mag aliqua enima minim veniam quis nostrud exercitation',
        },
        {
            id: 6,
            image: <SlDiamond className='text-4xl text-purple-600'/>,
            title: 'Stage Decorations',
            des: 'Aorem ipsum dolor sit amet consectetur elit sed lusm tempor incididunt ut labore et dolore mag aliqua enima minim veniam quis nostrud exercitation',
        },
    ]
    return (
        <div className='container px-8 lg:px-36 mt-32'>
            <h2 className='text-center text-4xl font-semibold'>The <span className='text-purple-600'>Event Management</span> Specialists</h2>
            <h4 className='text-center text-xl my-8'>From Wedding Functions to Birthday Parties or Corporate Events to Musical Functions, We <br /> offer full range of Events Management Services that scale to your needs & budget.</h4>
           <div className='grid lg:grid-cols-3'>
           {
                specialists.map(item => <Specialist key={item.id} specialist={item}></Specialist>)
            }
           </div>

        </div>
    );
};

export default Specialists;