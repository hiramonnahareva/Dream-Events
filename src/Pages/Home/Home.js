import React from 'react';
import Gallery from '../../Component/Gallery/Gallery';
import ImgGallery from '../../Component/Gallery/ImgGallery';
import Review from '../../Component/Review';
import Brands from '../../Component/Service/Brands/Brands';
import Banner from './Banner';
import DreamEvents from './DreamEvents';
import ServiceBlog1 from './ServiceBlog1';
import ServiceBlog2 from './ServiceBlog2';
import Services from './Services/Services';


const Home = () => {
    return (
    <div>
        <Banner/>
        <ServiceBlog1/>
        <ServiceBlog2/>
        <DreamEvents/>
        <Services/>
        <ImgGallery/>
        <Gallery/>
        <Brands/>
        {/* <Featured/> */}
        {/* <Review/> */}
    </div>

    );
};

export default Home;