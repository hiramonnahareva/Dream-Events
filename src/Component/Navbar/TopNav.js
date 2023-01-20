import React from 'react';
import { BiPhone } from 'react-icons/bi';
import { BsGoogle, BsTwitter } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import { RxCounterClockwiseClock } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const TopNav = () => {
    return (
      <div className="bg-gray-100">
        <div className="lg:navbar lg:px-32 px-10">
  <div className="lg:flex-1 ">
    <div className="lg:flex gap-6">
    <a className="normal-case flex gap-2 items-center mb-2"> <BiPhone/> (+01) 123 456 7890</a>
    <a className="normal-case flex gap-2 items-center mb-2"> <GoMail/> contact@gmail.com</a>
    <a className="normal-case flex gap-2 items-center mb-2"> <RxCounterClockwiseClock/> Mon – Fri 9.00 am – 6.00 pm</a>
    </div>
  </div>
  <div className="lg:flex-none">
    <div className="dropdown flex gap-2 lg:pb-0 pb-2 dropdown-end">
      
      <Link to='' className="rounded-full bg-slate-200 p-2 hover:text-primary"> <BsTwitter className='text-gray-400 transition-all w-4 h-4  hover:text-primary'/></Link>
      <Link to='' className="rounded-full bg-slate-200 p-2 hover:text-primary"> <FaFacebookF className='text-gray-400 transition-all w-4 h-4  hover:text-primary'/></Link>
      <Link to='' className="rounded-full bg-slate-200 p-2 hover:text-primary"> <BsGoogle className=' text-gray-400 transition-all  w-4 h-4 hover:text-primary'/></Link> 
      <Link to='' className="rounded-full bg-slate-200 p-2 hover:text-primary"> <FaLinkedinIn className=' text-gray-400 transition-all w-4 h-4  hover:text-primary'/></Link>
    </div>
  </div>
</div>
</div>
    );
};

export default TopNav;