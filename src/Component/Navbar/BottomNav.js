import React from 'react';
import { Link } from 'react-router-dom';

const BottomNav = () => {
    return (
      <div className='bg-base-100 sticky top-0 z-10'>
<div className="lg:px-32 px-10 navbar">
      {/* --------------- Moblie menu ---------------- */}
    <div className="dropdown">
      <label tabIndex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li tabIndex="0">
        <a>
          Home
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-base-100">
          <li><Link to=''>Home 1</Link></li>
          <li><Link to=''>Home 2</Link></li>
        </ul>
      </li>
      <li><Link to='/services'>services</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/events'>Events</Link></li>
      <li><Link to='/events'>Dashbord</Link></li>
      <li tabIndex="0">
        <Link to=''>
         News
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </Link>
        <ul className="p-2 bg-base-100">
          <li><Link to=''>News 1</Link></li>
          <li><Link to=''>News 2</Link></li>
        </ul>
      </li>
      <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </div>
  
  <div className="flex-1">
    <Link to='/' className="btn btn-ghost normal-case text-xl"><span className='text-purple-600'>D</span>Evants</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 lg:flex hidden">
      <li tabIndex="0">
        <a>
          Home
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-base-100">
          <li><Link to=''>Home 1</Link></li>
          <li><Link to=''>Home 2</Link></li>
        </ul>
      </li>
      <li><Link to='/services'>services</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/events'>Events</Link></li>
      <li><Link to='/dashboard'>Dashbord</Link></li>
      <li tabIndex="0">
        <Link to=''>
         News
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </Link>
        <ul className="p-2 bg-base-100">
          <li><Link to=''>News 1</Link></li>
          <li><Link to=''>News 2</Link></li>
        </ul>
      </li>
      <li><Link to='/contact'>Contact</Link></li>
    </ul>
    {/* --------------- Moblie menu ---------------- */}
    {/* <div className="dropdown">
      <label tabIndex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li tabIndex="0">
        <a>
          Home
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-base-100">
          <li><Link to=''>Home 1</Link></li>
          <li><Link to=''>Home 2</Link></li>
        </ul>
      </li>
      <li><Link to='/services'>services</Link></li>
      <li><Link to='/About'>About</Link></li>
      <li><Link to=''>Events</Link></li>
      <li tabIndex="0">
        <Link to=''>
         News
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </Link>
        <ul className="p-2 bg-base-100">
          <li><Link to=''>News 1</Link></li>
          <li><Link to=''>News 2</Link></li>
        </ul>
      </li>
      <li><Link to=''>Contact</Link></li>
      </ul>
    </div> */}
  </div>
</div>
 </div>
    );
};

export default BottomNav;