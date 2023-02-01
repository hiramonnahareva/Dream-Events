import React from 'react';
import { HiArrowRightOnRectangle } from 'react-icons/hi2';

const Skills = () => {
    const list = [
        {
            _id: 1,
            text: 'orem ipsum dolor sit, amet consectetur.'
        },
        {
            _id: 2,
            text: 'amet consectetur. orem ipsum dolor sit'
        },
        {
            _id: 3,
            text: 'orem ipsum dolor sit, amet consectetur.'
        },
        {
            _id: 4,
            text: 'amet consectetur norem ipsum dolor sit'
        },
    ]
    return (
    <div className='flex lg:m-20 m-4 gap-20 justify-center items-center'>
       <div className='flex-none'>
        {/* ----------------- title ---------------- */}
                <h2 className='text-4xl w-[611px] font-bold mb-10'><span className='text-purple-600'>Birthday</span> Event</h2>
                <p className='mb-5 font-medium text-gray-700 text-[17px]'>Consectetur elit sed do eiusmod tempor incididunt ut labore et dolore <br /> magna aliquled enim ad minim veniam quis nostrud exercitation <br /> ullamco laboris nisi ut aliquip volputate consequat  aute irure dolor in <br /> reprehenderit in velit..</p>
                {/* ----------------- skills List ---------------- */}
                {
                    list.map(item => 
                        <div key={item.id} className="flex mt-4 gap-2 items-center">
                <HiArrowRightOnRectangle className='text-primary'/>
                <span>{item.text}</span>
                </div>
                        )}
                
            </div>

<div className=''>
    {/* ----------------- Event in progress ---------------- */}

          <div className='mb-3 flex-1'>
          <h2>Birthday Parties</h2>
          <progress className="progress bg-gray-200  progress-primary w-96 h-[3px]" value="80" max="100"></progress>
          </div>
          <div className='mb-3'>
          <h2>Wedding Events</h2>
          <progress className="progress bg-gray-200 progress-primary w-96 h-[3px]" value="90" max="100"></progress>
          </div>
          <div className='mb-3'>
          <h2>Corporate Events</h2>
          <progress className="progress bg-gray-200 progress-primary w-96 h-[3px]" value="40" max="100"></progress>
          </div>
          <div className='mb-3'>
            <h2>Proposal Arrange</h2>
          <progress className="progress bg-gray-200 progress-primary w-96 h-[3px]" value="70" max="100"></progress>
          </div>
          <div className='mb-3'>
            <h2>Social Seminars</h2>
          <progress className="progress bg-gray-200 progress-primary w-96 h-[3px]" value="70" max="100"></progress>
          </div>
        </div>

    </div>
    );
};

export default Skills;