import React from 'react';
import { Link } from 'react-router-dom';

const BigBtn = ({title, link}) => {
    return (
        <button className='border-2 border-primary bg-primary px-8 py-2 rounded-full uppercase text-white'><Link to={`${link}`}>{title}</Link></button> 
    );
};

export default BigBtn;