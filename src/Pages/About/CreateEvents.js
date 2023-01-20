import React, { useEffect, useState } from 'react';
import SingleEvent from './SingleEvent';

const CreateEvents = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('serviceData.json')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])
    return (
        <div className='container px-8 lg:px-36 mt-32'>
        <div className="text-center">
        <h2 className='text-center text-4xl font-semibold mb-4'>We <span className='text-purple-600'>Create Events</span> That Lasts</h2>
        <p className='text-xl text-center text-gray-600 m-8'>From Wedding Functions to Birthday Parties or Corporate Events to Musical Functions, We <br /> offer full range of Events Management Services that scale to your needs & budget.</p>
        </div>
                <div className="carousel mx-auto">
          {
           data.slice(0, 3).map(service => <SingleEvent key={service.id} service={service}></SingleEvent>)
          }
          </div>
  
      </div>
    );
};

export default CreateEvents;