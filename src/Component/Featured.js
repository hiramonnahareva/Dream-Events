import React from 'react';
import image from '../Images/Group 17 (2).png';

const Featured = () => {
    return (
        <div 
           className='h-[500px] my-32'>
            <img src={image} height='500px' alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quae illum, iste accusantium sequi molestiae voluptatem atque velit hic fugit odio deserunt, voluptas a soluta dicta voluptates dolorem molestias minus.</p>
        </div>
    );
};

export default Featured;