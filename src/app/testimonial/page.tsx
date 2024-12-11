'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { FaCircle, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
    
  {
    id: 1,
    name: "James Nduku",
    role: "Software Developer",
    avatar: "/images/Avatar Image 1.png",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    id: 2,
    name: "Erick Kipkemboi",
    role: "Scrum Master",
    avatar: "/images/Avatar Image2.png",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    id: 3,
    name: "Stephen Kerubo",
    role: "UI/UX Designer",
    avatar: "/images/Avatar Image 3.png",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  }
];

const Page = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className='  [mt-100px] lg:w-full h-auto'>
      <div className='mb-8'>
        <h1 className='text-[36px] font-bold'>Customer Testimonials</h1>
        <p className='text-[18px]'>What our clients say about us</p>
      </div>

      {/* Mobile View */}
      <div className="block  lg:hidden">
        <div className='relative flex flex-col items-center'>
          <div className='w-full mx-3 border border-black p-[5px]'>
            <Image src="/images/Stars.png" width={116} height={18.89} alt="Star icons" />
            <p className='mt-4 text-[18px] leading-[27px]'>{testimonials[currentIndex].review}</p>
            <div className='flex gap-[20px] mt-4'>
              <Image src={testimonials[currentIndex].avatar} width={56} height={56} alt="Avatar" />
              <div>
                <h1 className="font-semibold text-[16px]">{testimonials[currentIndex].name}</h1>
                <p className='text-[16px]'>{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>

          {/* Dots & Navigation */}
          <div className='flex items-center gap-4 mt-4'>
            <button id="prev" onClick={handlePrev}>
              <FaArrowLeft className="text-black text-[30px] hover:scale-125 transition-transform" />
            </button>

            <div className='flex gap-2'>
              {testimonials.map((_, index) => (
                <FaCircle
                  key={index}
                  className={`text-[12px] cursor-pointer transition-transform hover:scale-125 ${
                    index === currentIndex
                      ? 'text-black'
                      : 'text-gray-400 border border-black rounded-full'
                  }`}
                 
                />
              ))}
            </div>

            <button id="next" onClick={handleNext}>
              <FaArrowRight className="text-black text-[30px] hover:scale-125 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Large Screen View */}
      <div className="hidden lg:flex lg:gap-8">
        {testimonials.map((item) => (
          <div key={item.id} className='w-[416px] border border-black p-8'>
            <Image src="/images/Stars.png" width={116} height={18.89} alt="Star icons" />
            <p className='mt-4 text-[18px] leading-[27px]'>{item.review}</p>
            <div className='flex gap-[20px] mt-4'>
              <Image src={item.avatar} width={56} height={56} alt="Avatar" />
              <div>
                <h1 className="font-semibold text-[16px]">{item.name}</h1>
                <p className='text-[16px]'>{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
