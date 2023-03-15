import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
const Navbar = () => {

  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = 'hidden';
    }
    else {
      document.body.style.overflow = 'scroll';
    }
  }

  return (
    <div className='absolute w-full flex justify-between items-center'>
      <h1 className='text-white font-extrabold text-4xl pl-5 mt-3 z-20'>Beyond Tomorrow</h1>
      <HiMenuAlt3 onClick={handleNav} className='z-20 mr-3 text-white cursor-pointer hover:text-red-500' size={25}></HiMenuAlt3>

      <div className={nav
        ? 'ease-in duration-300 fixed text-gray-300 lfet-0 top-0 w-full h-screen bg-black/90 px-4 pt-7 flex-col z-10' : 'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10'
      }>
        <ul className='flex flex-col fixed w-full h-full items-center justify-center'>

          <li className='font-bold text-2xl my-2 py-2 px-4 cursor-pointer'>Home</li>
          <li className='font-bold text-2xl my-2 py-2 px-4 cursor-pointer'>Destinations</li>
          <li className='font-bold text-2xl my-2 py-2 px-4 cursor-pointer'>Reservation</li>
          <li className='font-bold text-2xl my-2 py-2 px-4 cursor-pointer'>Rooms</li>
          <li className='font-bold text-2xl my-2 py-2 px-4 cursor-pointer'>Amenities</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;