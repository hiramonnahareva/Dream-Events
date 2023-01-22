import React from 'react';
import image from '../../../Images/Group 21.png'

const Featured = () => {
    return (
       
        <div className='relative'>
        <img src={image} className='relative' alt="" />
        <div className='absolute top-0 flex justify-center items-center lg:flex-row flex-col'>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, nihil.</h2>
            

        </div>
         </div>
    );
};

export default Featured;