import React from 'react';
import { Link } from 'react-router-dom';

const BottomNav = () => {
    return (
      <div className='bg-base-100 sticky top-0 z-10'>
<div class="lg:px-32 px-10 navbar">
  <div class="flex-1">
    <Link to='/' class="btn btn-ghost normal-case text-xl">daisyUI</Link>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li tabindex="0">
        <a>
          Home
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul class="p-2 bg-base-100">
          <li><Link to=''>Home 1</Link></li>
          <li><Link to=''>Home 2</Link></li>
        </ul>
      </li>
      <li><Link to='/services'>services</Link></li>
      <li><Link to=''>Item 3</Link></li>
      <li tabindex="0">
        <Link to=''>
          Parent
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </Link>
        <ul class="p-2 bg-base-100">
          <li><Link to=''>Submenu 1</Link></li>
          <li><Link to=''>Submenu 2</Link></li>
        </ul>
      </li>
    </ul>
  </div>
</div>
</div>
    );
};

export default BottomNav;