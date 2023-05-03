import React from 'react';

const Restaurants = ({ restaurant }) => {
    // console.log(restaurant);
    return (
        <div className='relative transform duration-200 hover:-translate-y-2 '>
            <img className='h-52 w-full rounded-3xl ' src={restaurant.image} alt="" />
            <div className='text-center absolute top-10  '>
            <button className='bg-blue-400 text-base hover:bg-blue-600 duration-300 hover:text-white text-center rounded-sm px-3 py-1 font-semibold'>Book Now</button>
            </div>
        </div>
    );
};

export default Restaurants;