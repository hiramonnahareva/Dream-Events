import React from 'react';
import image from '../../../Images/ServiceImages/dance-1.jpg';
import image1 from '../../../Images/ServiceImages/birthday-1.jpg';
import image2 from '../../../Images/ServiceImages/birthday-2.jpg';
import image3 from '../../../Images/ServiceImages/dance-4.jpg';
import image4 from '../../../Images/ServiceImages/dance-2.jpg';

const Services = () => {
    return (
        <div className='container bg-slate-100 px-8 lg:px-60 py-28 mt-32'>
        <h2 className='text-center text-4xl font-semibold'><span className='text-purple-600'>Event</span> Services</h2>
        <h3 className='text-center text-[18px] mt-4 mb-4'>We make your events smart & impactful by personalised event management services</h3>
        <h4 className='text-center text-[16px] text-slate-500 mb-10'>Some Wedding Functions to Birthday Parties or Corporate Events to Musical Functions, We <br /> offer full range of Events Management Services that scale to your needs & budget.</h4>
       <div className='grid lg:grid-cols-3 gap-20'>
       <div>
        <div className='w-[300px]'>
          <div className='relative'>
          <img className='full ' src={image} alt="" />
           <div className='absolute left-4 -bottom-9 border-l-4 h-10 mb-4 border-purple-600'></div>
          </div>
            <h2 className='text-xl pt-8 pb-2'>Social Events</h2>
            <p>Sit amet consectetur elit sed lusm tempor incidant temdore ut labore etua dolore.</p>
        </div>

        <div className='w-[300px] my-10'><div className='relative'>
          <img className='full ' src={image1} alt="" />
           <div className='absolute left-4 -bottom-9 border-l-4 h-10 mb-4 border-purple-600'></div>
          </div>
            <h2 className='text-xl pt-8 pb-2'>Social Events</h2>
            <p>Sit amet consectetur elit sed lusm tempor incidant temdore ut labore etua dolore.</p>
        </div>    
       </div>
       <div>
           <img className='rounded-bl-3xl rounded-tr-3xl h-[650px]' src={image2} alt="" />
        </div>

       <div>
       <div>
       <div className='relative'>
          <img className='full ' src={image3} alt="" />
           <div className='absolute left-4 -bottom-9 border-l-4 h-10 mb-4 border-purple-600'></div>
          </div>
            <h2 className='text-xl pt-8 pb-2'>Social Events</h2>
            <p>Sit amet consectetur elit sed lusm tempor incidant temdore ut labore etua dolore.</p>
        </div>
        <div className='my-10'>
        <div className='relative'>
          <img className='full ' src={image4} alt="" />
           <div className='absolute left-4 -bottom-9 border-l-4 h-10 mb-4 border-purple-600'></div>
          </div>
            <h2 className='text-xl pt-8 pb-2'>Social Events</h2>
            <p>Sit amet consectetur elit sed lusm tempor incidant temdore ut labore etua dolore.</p>
        </div>
       </div>

       </div>


    </div>
    );
};

export default Services;