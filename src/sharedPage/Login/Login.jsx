import React from 'react';
import loginAnimation from '../../../public/login/login.json'
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";

const Login = () => {
  
    return (
        <div className="mx-16 mt-16 md:flex justify-center gap-5 h-80">
        <form  className="w-full  md:w-2/4 shadow-2xl p-6">
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
          <p className="mb-3">
            <small className="font-bold ">
              New To Sakura ? <Link className="text-red-700" to="/register">
                Register
              </Link>
            </small>
          </p>
  
          <button className="bg-blue-400 text-xl hover:bg-blue-600 duration-300 hover:text-white block text-center rounded-sm w-full px-3 py-1 font-semibold ">
            Login
                </button>
         
            </form>
            <Lottie
          className="shadow-2xl"
          style={{ width: "full" }}
          animationData={loginAnimation}
        />
      </div>
    );
};

export default Login;