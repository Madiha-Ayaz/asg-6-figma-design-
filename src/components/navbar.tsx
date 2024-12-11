'use client'; // This marks the file as a client component

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div className="w-full">
      <div className="pr-[64px] pl-[64px] bg-white h-3"></div>

      <div className="flex justify-between w-full bg-gray-100 border-[1px] ">
        <Image
          src="/images/Ddsgnr Library.png"
          width={105.6}
          height={41}
          alt="logo"
          className="pt-[15px] pb-[15px]"
        />

        {/* Hamburger Icon (Mobile) */}
        <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col items-center space-y-4 text-black bg-gray-800 p-4">
            <a href="#" className="hover:text-gray-400">Home</a>
            <a href="#" className="hover:text-gray-400">Courses</a>
            <a href="#" className="hover:text-gray-400">Services</a>
            <a href="#" className="hover:text-gray-400">Achievement</a>
            <a href="#" className="hover:text-gray-400">About Us</a>
            <a href="#" className="hover:text-gray-400">Testimonial</a>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex w-[810px] h-[44px] gap-[32px] bg-white items-center justify-start mt-[10px] font-Roboto text-base">
          <Link href="#">Home</Link>
          <Link href="#courses">Courses</Link>
          <Link href="#services">Services</Link>
          <Link href="#achievement">Achievement</Link>
          <Link href="#aboutus">About Us</Link>
          <Link href="#testimonial">Testimonial</Link>
          <button className='w-[80px] h-[40px] rounded border border-black pt-8px pb-8px pr-20px pl-20px font-Roboto justify-center text-base  items-center'>Login</button>
          <button className='w-[95px] h-[40px] rounded border border-black pt-8px pb-8px pr-20px pl-20px font-Roboto justify-center text-base  items-center bg-black text-white'>Sign Up</button>
        
        
        </div>
      </div>
    </div>
  );
};

export default Navbar;




