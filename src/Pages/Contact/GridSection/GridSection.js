import React from 'react';
import { BsTelephoneInbound } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { MdOutlineLocalPostOffice } from 'react-icons/md';
import image from '../../../Images/bgpattern1.jpg';
import Grid from './Grid';

const GridSection = () => {

    const data = [
        {
          _id: 1,
          img: image,
          title: 'Address',
          address: '38-2 Hilton Street, California',
          icon:  <GoLocation className='text-3xl'/>,
          bg: 'bg-secondary/80',
          
        },
        {
          _id: 2,
          img: image,
          title: 'Phone',
          address: '(+01) 123 456 7890',
          icon:  <BsTelephoneInbound className='text-3xl'/>,
          bg: 'bg-primary/80',
          
        },
        {
          _id: 3,
          img: image,
          title: 'Email',
          address: 'inform@dvents.com',
          icon:  <MdOutlineLocalPostOffice className='text-3xl'/>,
          bg: 'bg-black/80',
          
        }
      ]
      return (
        <div>
           
            
        {/* </div> */}
          <div className=''>
            <div className='flex gap-[60px] text-xl font-semibold text-gray-700 mt-20 mb-10 justify-center items-center'>
            <h4>Contact us if you need our services. We will be happy to make your events memorable!</h4>
            </div>
            
          
                <div className="my-10">
                  <div className='lg:grid grid-cols-3 gap-10 lg:mx-60 mx-10 rounded-tr-lg rounded-bl-lg'>
                 {
                  data.map((item) =>  <Grid key={item._id} item={item}/>)
                 }
                </div>
                </div>
                </div>
                </div>
   
    );
};

export default GridSection;