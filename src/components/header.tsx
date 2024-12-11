import React from 'react';

import { FaInstagram, FaLinkedin, FaTwitter,FaFacebook } from "react-icons/fa";


const header = () => {
  return (
    
        <div className=" w-full bg-gray-100 outline outline-1 outline-black  hidden lg:block
 ">
          <div className='w-[1280px] mx-auto h-54 px-4'>
   <div>
  
   <div className=' flex justify-between items-center h-[40px]  pt-[12px] pb-[12px]  text-black'>
    <div className='flex gap-6'>
    <p className='w-[260px] h-[21px]'>Phone Number: 956 742 455 678</p>
    <p className='border-r-[1px] border-black'></p>
    <p className='w-149 h-[21px]'>Email:info@ddsgnr.com</p> 
  </div>
    <div className="  flex gap-[32px]">
    
  
  <FaFacebook className="  hover:scale-125 text-black transition-transform"/>
  <FaInstagram className=" hover:scale-125 text-black transition-transform" />
  <FaTwitter className=" hover:scale-125 text-black transition-transform"/>
  <FaLinkedin className="  hover:scale-125 text-black transition-transform" />
  </div>
</div>
</div>
</div>
</div>




  
  )
}

export default header