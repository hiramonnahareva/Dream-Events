import React from 'react';

const BigBtn = ({title}) => {
    return (
        <button className='border-2 border-primary bg-primary px-8 py-2 rounded-full uppercase text-white'>{title}</button> 
    );
};

export default BigBtn;