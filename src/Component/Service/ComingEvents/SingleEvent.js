import React from 'react';
import { Link } from 'react-router-dom';

const SingleEvent = ({id, img,  title}) => {
 
  return (
    <div id={`item${id}`} className="carousel-item w-96 gap-6 mx-4">
      <div><img src={img} className="w-50" />
        <div className="flex justify-center mt-[-6%]">
          <div className='border-l-4 h-12 border-purple-600'></div>
        </div>
        <h2 className='text-2xl text-center mt-4 cursor-pointer hover:text-purple-600'><Link to={`/service/${id}`}>{title}</Link></h2></div>
    </div>
  );
};

export default SingleEvent;