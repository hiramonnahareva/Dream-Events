import React from 'react';

const Googlemap = () => {
    return (
        <div className="my-32 flex mx-40 gap-10">
           <div className='flex-1'>
                <div className='flex gap-4'>
                <input className='w-full border-b-[1px] italic border-gray-300 py-5 my-4 focus-within:shadow-lg focus:outline-none focus:ring focus:border-blue-500' type="text" placeholder='Eneter Your Name' />
                <input className='w-full border-b-[1px] italic border-gray-300 py-5 my-4 focus-within:shadow-lg focus:outline-none focus:ring focus:border-blue-500' type="email" placeholder='Eneter Your Email' name="" id="" />
                </div>
                <div className='flex gap-4'>
                <input className='w-full border-b-[1px] italic border-gray-300 py-5 my-4 focus-within:shadow-lg focus:outline-none focus:ring focus:border-blue-500' type="number" placeholder='Eneter Your Tel' />
                <input className='w-full border-b-[1px] italic border-gray-300 py-5 my-4 focus-within:shadow-lg focus:outline-none focus:ring focus:border-blue-500' type="text" placeholder='Where do you heard about us' name="" id="" />
                </div>
                <textarea className='w-full border-b-[1px] italic border-gray-300 py-5 my-4 focus-within:shadow-lg focus:outline-none focus:ring focus:border-blue-500' type="text" placeholder='Your Message...' name="" id="" cols="30" rows="5"></textarea>
                <input className='w-full border-2 bg-primary px-8 py-3 rounded-full uppercase text-white' type="submit" value="Send Comment" />
           </div>
            <div className='flex-1'>
                <div height={500} width={600} className="relative text-center ">
                    <div height={500} width={600} className="">
                        <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=dhaka,&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Googlemap;