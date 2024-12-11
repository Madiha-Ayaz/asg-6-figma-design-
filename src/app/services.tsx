import React from 'react'
import Image from 'next/image'

const courses = () => {
  return (
  <section id="services">
    <div className='w-full max-w-screen-xl px-4 py-12 mx-auto'>
      <div className='text-center'>
        <h1 className='font-Roboto font-bold text-3xl sm:text-4xl md:text-5xl leading-snug mb-4'>
          Explore Courses By Category
        </h1>
        <p className='text-lg sm:text-xl'>
          Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
        {/* Course 1 */}
        <div className='flex flex-col bg-gray-100 border rounded-lg p-4'>
          <div className='flex gap-4'>
            <Image
              src="/images/Frame 292.png"
              width={100}
              height={100}
              alt='logo'
              className='rounded-lg object-contain'
            />
            <div>
              <h1 className='text-xl font-semibold leading-snug'>
                Design & Development
              </h1>
              <p>50+ Courses Available</p>
            </div>
          </div>
        </div>

        {/* Course 2 */}
        <div className='flex flex-col bg-gray-100 border rounded-lg p-4'>
          <div className='flex gap-4'>
            <Image
              src="/images/Frame 292 4.png"
              width={100}
              height={100}
              alt='logo'
              className='rounded-lg object-contain'
            />
            <div>
              <h1 className='text-xl font-semibold leading-snug'>
                Design & Development
              </h1>
              <p>50+ Courses Available</p>
            </div>
          </div>
        </div>

        {/* Course 3 */}
        <div className='flex flex-col bg-gray-100 border rounded-lg p-4'>
          <div className='flex gap-4'>
            <Image
              src="/images/Frame 292 7.png"
              width={100}
              height={100}
              alt='logo'
              className='rounded-lg object-contain'
            />
            <div>
              <h1 className='text-xl font-semibold leading-snug'>
                Design & Development
              </h1>
              <p>50+ Courses Available</p>
            </div>
          </div>
        </div>

        {/* Course 4 */}
        <div className='flex flex-col bg-gray-100 border rounded-lg p-4'>
          <div className='flex gap-4'>
            <Image
              src="/images/Frame 292 2nd.png"
              width={100}
              height={100}
              alt='logo'
              className='rounded-lg object-contain'
            />
            <div>
              <h1 className='text-xl font-semibold leading-snug'>
                Design & Development
              </h1>
              <p>50+ Courses Available</p>
            </div>
          </div>
        </div>

        {/* Course 5 */}
        <div className='flex flex-col bg-gray-100 border rounded-lg p-4'>
          <div className='flex gap-4'>
            <Image
              src="/images/Frame 292 5.png"
              width={100}
              height={100}
              alt='logo'
              className='rounded-lg object-contain'
            />
            <div>
              <h1 className='text-xl font-semibold leading-snug'>
                Design & Development
              </h1>
              <p>50+ Courses Available</p>
            </div>
          </div>
        </div>

        {/* Course 6 */}
        <div className='flex flex-col bg-gray-100 border rounded-lg p-4'>
          <div className='flex gap-4'>
            <Image
              src="/images/Frame 292 8.png"
              width={100}
              height={100}
              alt='logo'
              className='rounded-lg object-contain'
            />
            <div>
              <h1 className='text-xl font-semibold leading-snug'>
                Design & Development
              </h1>
              <p>50+ Courses Available</p>
            </div>
          </div>
        </div>

        {/* Course 7 */}
        <div className='flex flex-col bg-gray-100 border rounded-lg p-4'>
          <div className='flex gap-4'>
            <Image
              src="/images/Frame 292 3rd.png"
              width={100}
              height={100}
              alt='logo'
              className='rounded-lg object-contain'
            />
            <div>
              <h1 className='text-xl font-semibold leading-snug'>
                Design & Development
              </h1>
              <p>50+ Courses Available</p>
            </div>
          </div>
        </div>

        {/* Course 8 */}
        <div className='flex flex-col bg-gray-100 border rounded-lg p-4'>
          <div className='flex gap-4'>
            <Image
              src="/images/Frame 292 6.png"
              width={100}
              height={100}
              alt='logo'
              className='rounded-lg object-contain'
            />
            <div>
              <h1 className='text-xl font-semibold leading-snug'>
                Design & Development
              </h1>
              <p>50+ Courses Available</p>
            </div>
          </div>
        </div>

        {/* Course 9 */}
        <div className='flex flex-col bg-gray-100 border rounded-lg p-4'>
          <div className='flex gap-4'>
            <Image
              src="/images/Frame 292 9.png"
              width={100}
              height={100}
              alt='logo'
              className='rounded-lg object-contain'
            />
            <div>
              <h1 className='text-xl font-semibold leading-snug'>
                Design & Development
              </h1>
              <p>50+ Courses Available</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center mt-8'>
        <button className='py-2 px-8 border border-black rounded-lg text-center'>
          View All Courses
        </button>
      </div>
    </div>
    </section>
  )
}

export default courses
