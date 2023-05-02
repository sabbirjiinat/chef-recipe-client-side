import React from 'react';
import Lottie from "lottie-react";
import errorAnimation from '../../../public/errorPage/ErrorAnimation.json'
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error.error.message);
    return (
        <div className='flex flex-col items-center justify-center'>
          
            <Lottie className='shadow-2xl w-3/5 h-80' animationData={errorAnimation} loop={true} />
            <h1 className='text-4xl text-red-700 font-bold'>{ error.error.message}</h1>
            <Link to='/' className="bg-blue-400 text-xl hover:bg-blue-600 duration-300 hover:text-white block text-center rounded-sm  px-3 py-1 font-semibold w-3/5">
            Back To Home
          </Link>
       

        </div>
    );
};

export default ErrorPage;