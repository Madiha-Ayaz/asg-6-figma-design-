import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return(
    <div>
           <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 py-16">
  <div className="flex-1 text-center lg:text-left">
    <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6 text-gray-800">
    Learn new skills <br /> online with ease
    </h1>
    <p className="text-lg text-gray-600 mb-8">
        Discover a wide range of courses covering a variety of <br />
              subjects, taught by expert instructors.
    </p>
    <div className="flex justify-center lg:justify-start gap-4">
    <button className="px-6 py-3 bg-black text-white rounded hover:bg-blue-700">
      Start learning now</button>
    <button className="px-6 py-3 border rounded hover:bg-gray-100">
      Explore Courses</button>
    </div>
  </div>

  <div className="relative w-full lg:w-1/2 flex justify-center">
    <div className="relative w-80 lg:w-[640px] h-auto">
      <Image
        src="/images/9c8bd78727a1d0e4711461ee988533d0.jpeg"
        alt="Learning online"
        width={640}
        height={900}
      />
    </div>
    <div className="absolute -z-10 top-4 left-4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
  </div>
</div>


      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 py-8 bg-gray-100 w-full">
    <p className="text-black font-bold text-center lg:text-left">
      Trusted by 2000+ companies <br/> worldwide.
    </p>
    <Image
      src="/images/logos.png"
      alt="Company logos"
      width={1280}
      height={228}
      className="w-full lg:w-auto"
    />
  </div>
    </div>
  )
   
  
}

export default Hero;
