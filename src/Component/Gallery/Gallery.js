import React from 'react';
import image from '../../Images/bgpattern1.jpg';
import BigBtn from '../BigBtn';
import GalleryBg from './GalleryBg';


const Gallery = () => {
  const data = [
    {
      _id: 1,
      img: image,
      title: 'Get in Touch With Us!',
      text: 'Ask questions, schedule a meeting or request a proposal. Let’s Get Started',
      bg: 'bg-secondary/80',
      btn: 'Contect Us Now'
      
    },
    {
      _id: 2,
      img: image,
      title: 'Do You want To Work With Us!',
      text: 'If you are talented enough than you can join our team and have a bright future',
      bg: 'bg-primary/80',
      btn: 'Join Our Team'
      
    },
  ]
    return (
      <div className=''>
        <div className='lg:flex gap-[60px] text-xl font-semibold text-gray-700 my-20 justify-center items-center'><span className='mb-4'>
        See Our Full Gallery of Events!
        </span>
        <BigBtn title='View Full Gallery'/>
        </div>
        
      
            <div className="my-10">
              <div className='lg:grid grid-cols-2 gap-10 mx-10 rounded-tr-lg rounded-bl-lg'>
             {
              data.map((item) =>  <GalleryBg key={item._id} item={item}/>)
             }
            </div>
            </div>
            </div>
    );
};

export default Gallery;