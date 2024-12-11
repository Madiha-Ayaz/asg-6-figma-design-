import React from 'react'
import Image from 'next/image'

const Page = () => {
  return (
    
      <div className=' w-full h-[895px] py-[112px] px-[64px] gap-[80px] m-0 p-0'>
        <div className='text-center'>
          <h1 className='font-Roboto font-bold text-[48px] leading-[57.6px]'>Our team</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
       
        <div className=' w-full flex justify-center items-center mt-12 gap-[96px] '>
          {/* 1st Box */}
          <div className='w-[394px] h-[273px] flex flex-col items-center text-center '>
            <Image
              src="/images/p 1.png"
              width={80}
              height={80}
              alt="James Nduku"
            />
            <h3 className='font-Roboto text-[20px] font-bold leading-[30px] mt-[24px]'>James Nduku m</h3>
            <p className='font-Roboto text-[18px] font-normal leading-[30px]'>Marketing Coordinator</p>
            <Image
              src="/images/Social Icons.png"
              width={100}
              height={24}
              alt="Social Icons"
              className='mt-[16px]'
            />
          </div>

          {/* 2nd Box */}
          <div className='w-[394px] h-[273px] flex flex-col items-center text-center'>
            <Image
              src="/images/person 2.png"
              width={80}
              height={80}
              alt="James Nduku"
            />
            <h3 className='font-Roboto text-[20px] font-bold leading-[30px] mt-[24px]'>Joseph Munyambu</h3>
            <p className='font-Roboto text-[18px] font-normal leading-[30px]'>Nursing Assistant</p>
            <Image
              src="/images/Social Icons.png"
              width={100}
              height={24}
              alt="Social Icons"
              className='mt-[16px]'
            />
          </div>

          {/* 3rd Box */}
          <div className='w-[394px] h-[273px] flex flex-col items-center text-center'>
            <Image
              src="/images/person3.png"
              width={80}
              height={80}
              alt="James Nduku"
            />
            <h3 className='font-Roboto text-[20px] font-bold leading-[30px] mt-[24px]'>Joseph Ngumbau</h3>
            <p className='font-Roboto text-[18px] font-normal leading-[30px]'>Medical Assistant</p>
            <Image
              src="/images/Social Icons.png"
              width={100}
              height={24}
              alt="Social Icons"
              className='mt-[16px]'
            />
          </div>
        </div>
        <div className='w-full flex justify-center items-center mt-12 gap-[96px] hidden sm:flex'>
          {/* 4th Box */}
          <div className='w-[394px] h-[273px] flex flex-col items-center text-center'>
            <Image
              src="/images/person4.png"
              width={80}
              height={80}
              alt="James Nduku"
            />
            <h3 className='font-Roboto text-[20px] font-bold leading-[30px] mt-[24px]'>Erick Kipkemboi</h3>
            <p className='font-Roboto text-[18px] font-normal leading-[30px]'>Web Designer</p>
            <Image
              src="/images/Social Icons.png"
              width={100}
              height={24}
              alt="Social Icons"
              className='mt-[16px]'
            />
          </div>

          {/* 5th Box */}
          <div className='w-[394px] h-[273px] flex flex-col items-center text-center'>
            <Image
              src="/images/person5.png"
              width={80}
              height={80}
              alt="James Nduku"
            />
            <h3 className='font-Roboto text-[20px] font-bold leading-[30px] mt-[24px]'>Stephen Kerubo</h3>
            <p className='font-Roboto text-[18px] font-normal leading-[30px]'>President of Sales</p>
            <Image
              src="/images/Social Icons.png"
              width={100}
              height={24}
              alt="Social Icons"
              className='mt-[16px]'
            />
          </div>

          {/* 6th Box */}
          <div className='w-[394px] h-[273px] flex flex-col items-center text-center'>
            <Image
              src="/images/person6.png"
              width={80}
              height={80}
              alt="James Nduku"
            />
            <h3 className='font-Roboto text-[20px] font-bold leading-[30px] mt-[24px]'>John Leboo</h3>
            <p className='font-Roboto text-[18px] font-normal leading-[30px]'>Dog Trainer</p>
            <Image
              src="/images/Social Icons.png"
              width={100}
              height={24}
              alt="Social Icons"
              className='mt-[16px]'
            />
          </div>
        </div>
      </div>
  
  )
}

export default Page;
