import React from 'react';

const Hero = () => {
  return (
    <div className='w-full h-screen'>
      <img
        className='top-0 left-0 w-full h-screen object-cover'
        src='https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg'
        alt='/'
      />
      <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-yellow-100'>
        <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
          <p>All Inclusive</p>
          <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>
            Private Beaches & Getaways
          </h1>
          <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>
            Luxury accommodations 
          </p>
          <button className="bg-yellow-100 text-black hover:bg-white hover:text-black transition-colors duration-300">
            Reserve Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
