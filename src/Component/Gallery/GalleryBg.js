import React from 'react';
import BigOutlineBtn from '../BigOutlineBtn';

const GalleryBg = ({item}) => {
    const {img, bg, title, text, btn} = item;
    return (
            <div  style={{
            backgroundImage: `url(${img})`,
          }} className={`rounded-tl-3xl rounded-br-3xl relative bg-scroll  h-[280px] bg-center bg-primary bg-cover`}>
            <div className=' absolute top-0'>
                <div className={`rounded-tl-3xl rounded-br-3xl ${bg} lg:w-[699px] w-[100%] h-[280px] bg-center bg-cover`}></div>
            <div className='absolute text-center lg:top-14 top-5 w-full text-white'>
                <h2 className='text-3xl font-semibold'>{title}</h2>
            <p className='mt-3 mb-9'>{text}</p>
            <BigOutlineBtn title={btn}/>
            </div>
            </div>
        </div>
    );
};

export default GalleryBg;