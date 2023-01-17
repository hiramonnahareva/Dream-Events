import React from 'react';
import Gallery from '../../Component/Gallery/Gallery';
import {image} from '../../Images/ServiceImages/banner.png'
import Banner from './Banner';


const Home = () => {
    return (
    <div>
        <Banner/>
        <Gallery/>
    </div>

    );
};

export default Home;