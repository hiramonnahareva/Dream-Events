import React, {useState, useEffect } from 'react';
import SingleEvent from './SingleEvent';



const ComingEvents = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('serviceData.json')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])
    
    
    return (
       <div className='container px-8 lg:px-36 mt-32'>
         <div className="text-center">
         <h2 className='text-center text-4xl font-semibold mb-4'><span className='text-purple-600'>DreamEvants</span> Upcoming Events</h2>
         <p className='text-xl mb-8'>We make your events smart & impactful by personalised event management services.</p>
         </div>
                 <div className="carousel mx-auto">
           {
            data.map(service => <SingleEvent key={service.id} id={service.id} img={service.img1} title={ service.title }></SingleEvent>)
           }
           </div>
           <div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item4" className="btn btn-xs">2</a> 
  <a href="#item6" className="btn btn-xs">3</a> 
</div>
   
       </div>
        
    );
};

export default ComingEvents;