import React from 'react';
import { BsGoogle, BsTwitter } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn, FaPhone } from 'react-icons/fa';
import { MdOutlineLocalPostOffice } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ContactLink = () => {
    return (
        <div className='bg-gray-200 py-5 flex gap-10 justify-center'>
 <Link to='' className="rounded-full bg-slate-200 p-2 hover:text-primary"> <BsTwitter className='text-gray-400 transition-all w-4 h-4  hover:text-primary'/></Link>
      <Link to='' className="rounded-full bg-slate-200 p-2 hover:text-primary"> <FaFacebookF className='text-gray-400 transition-all w-4 h-4  hover:text-primary'/></Link>
      <Link to='' className="rounded-full bg-slate-200 p-2 hover:text-primary"> <BsGoogle className=' text-gray-400 transition-all  w-4 h-4 hover:text-primary'/></Link> 
      <Link to='' className="rounded-full bg-slate-200 p-2 hover:text-primary"> <FaLinkedinIn className=' text-gray-400 transition-all w-4 h-4  hover:text-primary'/></Link>
      <Link to='' className="rounded-full bg-slate-200 p-2 hover:text-primary"> <FaPhone className=' text-gray-400 transition-all w-4 h-4  hover:text-primary'/></Link>
      <Link to='' className="rounded-full bg-slate-200 p-2 hover:text-primary"> <MdOutlineLocalPostOffice className=' text-gray-400 transition-all w-4 h-4  hover:text-primary'/></Link>
        </div>
    );
};

export default ContactLink;