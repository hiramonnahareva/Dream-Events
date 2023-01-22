import React from 'react';
import ServiceBanner from '../../Component/Service/ServiceBanner';
import Counter from './Counter';
import CreateEvents from './CreateEvents';
import Skills from './Skills';
import WhyChoose from './WhyChoose';

const About = () => {
    return (
        <div>
            <ServiceBanner title="Who We Are" page="About"/>
            <CreateEvents/>
            <WhyChoose/>
            <Counter/>
            <Skills/>
        </div>
    );
};

export default About;