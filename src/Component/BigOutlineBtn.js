import React from 'react';
import { Link } from 'react-router-dom';

const BigOutlineBtn = ({title, link}) => {
    return (
        <button className='border-2 border-white px-8 py-2 rounded-full uppercase text-white'><Link to={`${link}`}>{title}</Link></button>
    );
};

export default BigOutlineBtn;