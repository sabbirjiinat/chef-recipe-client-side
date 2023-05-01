import React from 'react';
import Lottie from "lottie-react";
import cookingBanner from '../../../public/cookingBanner.json'

const Home = () => {
    return (
        <div className='md:flex md:items-center gap-6 md:px-12 md:p-10 bg-gray-100'>
            <div className='md:w-2/4 shadow-2xl h-96 p-7'>
                <h1 className='text-5xl'><span className='text-teal-700 font-bold'>Sakura</span> <span className='text-gray-700 '>Japanese Restaurants</span></h1>
                <p className='mt-5 md:text-lg'>A chef is a professional cook and tradesman who is proficient in all aspects of food preparation, often focusing on a particular cuisine. The word "chef" is derived from the term chef de cuisine (French pronunciation: ​[ʃɛf də kɥizin]), the director or head of a kitchen.</p>
            </div>
            <div className='md:w-2/4 shadow-2xl h-96'>
            <Lottie animationData={cookingBanner} loop={true} />
            </div>
        </div>
    );
};

export default Home;