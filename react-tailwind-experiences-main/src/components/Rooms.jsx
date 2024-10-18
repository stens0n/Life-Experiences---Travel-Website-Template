import React from 'react';

const Rooms = () => {
  return (
    <div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
      <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
        <h3 className='text-2xl font-bold'>Fine Interior Rooms</h3>
        <p className='pt-4'>
        Experience the perfect blend of elegance and comfort in our exquisitely designed rooms. 
        Every detail has been thoughtfully crafted to provide a serene and luxurious environment. 
        Whether you’re here for relaxation or business, our interiors offer a refined atmosphere that caters to your every need.
        From modern amenities to timeless decor, our rooms promise a stay that’s as comfortable as it is unforgettable. 
        Discover a place where sophistication meets tranquility.
        </p>
      </div>

      <div className='grid grid-cols-2 col-span-2 gap-2'>
        <img
        className='object-cover w-full h-full'
          src='https://images.pexels.com/photos/6475035/pexels-photo-6475035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='/'
        />
        <img
        className='row-span-2 object-cover w-full h-full'
          src='https://images.pexels.com/photos/3771827/pexels-photo-3771827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='/'
        />
        <img
        className='object-cover w-full h-full'
          src='https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='/'
        />
      </div>
    </div>
  );
};

export default Rooms;
