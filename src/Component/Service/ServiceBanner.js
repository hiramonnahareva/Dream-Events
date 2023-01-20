import React from 'react';
import banner from '../../Images/ServiceImages/banner.png';
import {RxTriangleRight} from 'react-icons/rx';
import { Link } from 'react-router-dom';


const ServiceBanner = ({title, page}) => {
    return (
            <div className='relative'>
             <img className='h-44 lg:h-full' src={banner} alt="" />
           <div className='absolute lg:top-[25%] top-[20%] left-[50%]  lg:ml-[-100px] ml-[-80px]'>
            <div className='flex justify-center'>
            <div className=' border-l-[4px] h-7 mb-4 border-purple-600'></div>
            </div>
           <h1 className='text-white text-2xl mb-3 lg:text-4xl font-bold'>{title}</h1>
           <div className='text-white text-[16px] items-center justify-center flex'>
            <Link className='hover:text-purple-600' to='/'>Home</Link> <span className='pt-1'><RxTriangleRight/></span> {page}</div>
           </div>
        </div>
    );
};

export default ServiceBanner;