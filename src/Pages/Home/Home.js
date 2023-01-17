import React from 'react';
import Gallery from '../../Component/Gallery/Gallery';
import Brands from '../../Component/Service/Brands/Brands';
import {image} from '../../Images/ServiceImages/banner.png'
import Banner from './Banner';


const Home = () => {
    return (
    <div>
        <Banner/>
        <Gallery/>
        <Brands/>
    </div>

    );
};

export default Home;