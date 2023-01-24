import React from 'react';
import ServiceBanner from '../../Component/Service/ServiceBanner';
import GridSection from './GridSection/GridSection';

const Contact = () => {
    return (
        <div>
            <ServiceBanner title={"Contact Us"} page={"Get in Touch"}/>
            <GridSection/>
        </div>
    );
};

export default Contact;