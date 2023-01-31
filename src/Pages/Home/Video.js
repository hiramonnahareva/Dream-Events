import React from 'react';
import BigBtn from '../../Component/BigBtn';

const Vedio = () => {
    return (
        <div className="mx-20 mt-20 lg:flex gap-16 items-center">
            <div className='flex-1'>
            <h2 className='text-4xl font-semibold mb-4'>We <span className='text-purple-600'>Create Events</span> That Lasts</h2>
        <p className='text-gray-600 mb-6 mr-16'>From Wedding Functions to Birthday Parties or Corporate Events to Musical Functions, We offer full range of Events Management Services that scale to your needs & budget.</p>
        <BigBtn title="CONTECT US NOW" link={'/contact'}/>
            </div>
            <div className="flex-1">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/dVlBA92IKQo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    );
};

export default Vedio;