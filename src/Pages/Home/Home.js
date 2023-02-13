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
import ChatBot from 'react-simple-chatbot';
import Vedio from './Video';
import RatingSystem from '../../Component/Review';
import Chat from '../../Component/Chat';

const steps = [
  {
    id: '0',
    message: 'Welcome to react chatbot!',
    trigger: '1',
  },
  {
    id: '1',
    message: 'Bye!',
    end: true,
  },
];


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
        <Vedio/>
        <Review/>
        <Brands/>
        <Chat/>


    </div>

    );
};

export default Home;