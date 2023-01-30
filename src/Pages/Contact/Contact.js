
import React from 'react';
import Googlemap from './GoogleMap/Googlemap';
import ServiceBanner from '../../Component/Service/ServiceBanner';
import GridSection from './GridSection/GridSection';

const Contact = () => {
    return (
        <div>
            <ServiceBanner title={"Contact Us"} page={"Get in Touch"}/>
            <GridSection/>
            <Googlemap/>
        </div>
    );
};

export default Contact;