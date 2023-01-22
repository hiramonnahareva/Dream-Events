import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import image from '../../Images/ServiceImages/banner.png';
import { AiOutlineUser, AiOutlineMessage, AiOutlineCheckSquare } from 'react-icons/ai';
import { HiLightBulb } from 'react-icons/hi';
const Counter = () => {

    const countData = [
        {start: 0 , endData: 100, icon: 'Featured Events'},
        {start: 0 , endData: 300, icon: 'Loyal Customers'},
        {start: 0 , endData: 500, icon: 'Good Comments'},
        {start: 0 , endData: 800, icon: 'Trophies Won'},
    ]
    const [counterOn, setCounterOn] = useState(false);
    return (
        <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
            <div style={{
                backgroundImage: `url(${image})`,
                width: '100%',
                height: '250px',
                marginBottom: '10px',
                color: 'white',
                paddingTop: '40px',
                paddingBottom: '70px',
            }}>
            <div className='flex justify-center items-center lg:flex-row flex-col'>
               
                
                    
                { countData.map(data => <div className='mx-4 my-4 px-16 py-10'>
                     <h1 className='text-3xl text-center' >
                   {
                       counterOn &&  <CountUp start={data.start} end={data.endData} duration={2} delay={0} />
                    }+
                    <h1 className='text-xl m-4' >{data.icon}</h1>
                </h1> 
                </div>
                )}
                
            </div>
            </div>
         </ScrollTrigger>
    );
};

export default Counter;