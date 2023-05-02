import React from 'react';
import Lottie from "lottie-react";
import { Link } from 'react-router-dom';
import registerAnimation from '../../../public/register/register1.json'

const Register = () => {
    return (
        <div className=" mt-8 md:flex justify-center gap-5 h-80">
        <form
      
          className=" w-full  md:w-2/4 shadow-2xl p-6"
        >
          <div className="mb-3">
            <div className="text-gray-600 font-bold">
              <label htmlFor="email">Email</label>
            </div>
            <input
              className="w-full border-2 px-2 rounded-md text-lg "
              type="email"
              name="email"
              placeholder="Email"
              required
              id="email"
            />
          </div>
          <div className="mb-3">
            <div className="text-gray-600 font-bold">
              <label htmlFor="password">Password</label>
            </div>
            <input
              className="w-full border-2 px-2 rounded-md text-lg "
              type="password"
              name="password"
              placeholder="Password"
              required
              id="password"
            />
          </div>
          <div className="mb-3">
            <div className="text-gray-600 font-bold">
              {" "}
              <label htmlFor="password">Confirm Password</label>
            </div>
            <input
              className="w-full border-2 px-2 rounded-md text-lg "
              type="password"
              name="confirm"
              placeholder="Confirm Password"
              required
              id="confirm"
            />
        
          </div>
  
          <div className="mb-3 flex gap-4">
            <div>
              <input
       
                className="me-3"
                type="checkbox"
                name="accept"
              />
              <label>Check Me!</label>
            </div>
            <p>
              <small className="font-bold">
                Already have an account ?{" "}
                <Link className="text-red-700" to="/login">
                  Login
                </Link>
              </small>
            </p>
          </div>
  
          <button
          className="bg-blue-400 text-xl hover:bg-blue-600 duration-300 hover:text-white block text-center rounded-sm w-full px-3 py-1 font-semibold "
            
          >
            Register
          </button>
        </form>
        <Lottie
          className="shadow-2xl"
          style={{ width: "full" }}
          animationData={registerAnimation}
        />
        ;
      </div>
    );
};

export default Register;