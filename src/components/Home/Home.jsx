import React, { useEffect, useState } from 'react';
import Lottie from "lottie-react";
import cookingBanner from '../../../public/cookingBanner.json'
import Chef from '../Chef/Chef';


const Home = () => {
    const [chefs, setChefs] = useState(null)
    useEffect(() => {
        fetch('http://localhost:5000/chef')
            .then(res => res.json())
        .then(data => setChefs(data))
    },[])
    return (
        <div >
            <div className='md:flex md:items-center gap-6 md:px-12 md:p-10 bg-gray-100'>
            <div className='md:w-2/4 shadow-2xl h-96 p-7 transform hover:-translate-y-4 duration-700'>
                <h1 className='text-5xl'><span className='text-teal-700 font-bold'>Sakura</span> <span className='text-gray-700 '>Japanese <span className='text-blue-600 font-bold'>Chef</span></span></h1>
                <p className='mt-5 md:text-lg'>A chef is a professional cook and tradesman who is proficient in all aspects of food preparation, often focusing on a particular cuisine. The word "chef" is derived from the term chef de cuisine (French pronunciation: ​[ʃɛf də kɥizin]), the director or head of a kitchen.</p>
            </div>
            <div className='md:w-2/4 shadow-2xl h-96 transform hover:-translate-y-4 duration-700'>
            <Lottie animationData={cookingBanner} loop={true} />
            </div>
            </div>
            <h1 className='text-center text-4xl my-10 font-bold'>Best <span className='text-blue-600'>Chef</span> In Japan !!</h1>
            <div className=' grid grid-cols-1 md:grid-cols-3 gap-6 md:justify-center md:items-center px-4 md:px-12 '>
                {chefs?.map(chef => <Chef
                    key={chef.id}
                    chef={chef}
                ></Chef>)}
            </div>
            
        </div>
    );
};

export default Home;