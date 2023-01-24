import React from 'react';
const Grid = ({item}) => {
        const {img, bg, title, address, icon} = item;
    return (
        <div>
            <div  style={{
            backgroundImage: `url(${img})`,
          }} className={`rounded-tl-3xl sticky rounded-br-3xl top-0 bg-scroll h-[150px] bg-center bg-primary bg-cover`}>
            <div className='absolute top-0'>
                <div className={`rounded-tl-3xl rounded-br-3xl ${bg} lg:w-[320px] w-[100%] h-[150px] bg-center bg-cover`}></div>
            <div className='absolute lg:left-11 lg:top-16 top-5 w-full text-white'>
            <h2 className='text-[18px]'>{title}</h2>
                <h2 className='text-[18px] font-semibold'>{address}</h2>
            </div>
            <div className='absolute lg:right-11 lg:top-10 top-5 text-white'>
           {icon}
            </div>
            </div>
        </div>
        </div>
    );
};

export default Grid;