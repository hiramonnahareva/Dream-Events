import React from 'react';
import ComingEvents from '../../Component/Service/ComingEvents/ComingEvents';
import PricingPlans from '../../Component/Service/PricingPlans/PricingPlans';
import ServiceBanner from '../../Component/Service/ServiceBanner';
import Specialists from '../../Component/Service/Specialists/Specialists';
import Brands from '../../Component/Service/Brands/Brands';
import Featured from '../../Component/Service/Featured.js/Featured';



const Services = () => {
    return (
        <div>
            <ServiceBanner title="Our services" page="Service" />
            <Specialists/>
            <Featured/>
            <ComingEvents/>
            <PricingPlans/>
            <Brands/>
        </div>
    );
};

export default Services;