import React from 'react';
import Featured from '../../Component/Featured';
import Gallery from '../../Component/Gallery/Gallery';
import ImgGallery from '../../Component/Gallery/ImgGallery';
import Review from '../../Component/Review';
import Brands from '../../Component/Service/Brands/Brands';
import {image} from '../../Images/ServiceImages/banner.png'
import Banner from './Banner';
import DreamEvents from './DreamEvents';
import ServiceBlog1 from './ServiceBlog1';
import ServiceBlog2 from './ServiceBlog2';


const Home = () => {
    return (
    <div>
        <Banner/>
        <ServiceBlog1/>
        <ServiceBlog2/>
        <DreamEvents/>
        <ImgGallery/>
        <Gallery/>
        <Brands/>
        <Featured/>
        <Review/>
    </div>

    );
};

export default Home;