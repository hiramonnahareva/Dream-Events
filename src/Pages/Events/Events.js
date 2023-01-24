import React from 'react';
import ComingEvents from '../../Component/Service/ComingEvents/ComingEvents';
import ServiceBanner from '../../Component/Service/ServiceBanner';

const Events = () => {
    return (
        <div>
            <ServiceBanner title={"Events"} page={"Events"}/>
            <ComingEvents/>
        </div>
    );
};

export default Events;