import React from 'react';

const SingleEvent = ({service}) => {
    console.log(service)
    const {img2, title} = service;
    return (
      <div className="mx-4">
        {/* ----------------- Single Event ---------------- */}
     <img src={img2} className="h-60" />
        <div className="flex justify-center mt-[-6%]">
          <div className='border-l-4 h-12 border-purple-600'></div>
        </div>
        <h2 className='text-xl text-center font-medium mt-4 cursor-pointer hover:text-purple-600'>{title}</h2>
        <p className='text-center mt-4 cursor-pointer text-gray-600'>Aorem ipsum dolor sit amet consectetur elit sed tempor incididunt ut labore etua dolore mag aliqua minim veniam quis nostrud exercitation</p>
    </div>
    );
};

export default SingleEvent;