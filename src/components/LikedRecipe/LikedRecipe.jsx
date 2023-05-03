import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid'



const LikedRecipe = ({ favoriteFood }) => {
    console.log(favoriteFood);
    const {chefName,image_url,name } = favoriteFood;
    return (
        <div className='border p-2 mx-4 md:mx-12 my-4 rounded-lg flex flex-col md:flex-row items-center'>

            <img className='h-full md:w-40 object-cover rounded-md' src={image_url} alt="" />
            <div className='flex-1 ms-4'>
            <h1 className='text-3xl mb-2'>Chef : {chefName}</h1>
                <h4 className='text-2xl  mb-2'>Recipe Name : {name}</h4>
                <button className=' bg-blue-400 text-xl hover:bg-blue-600 duration-300 hover:text-white block text-center rounded-sm md:w-40 px-3 py-1 font-semibold'>Order Now</button>
            </div>
            <TrashIcon   class="h-12 w-12 duration-200 text-red-500 hover:text-red-600 cursor-pointer" />
        </div>
    );
};

export default LikedRecipe;