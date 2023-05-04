import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import './NavigationBar.css'

const NavigationBar = () => {
  const { user, logOut, } = useContext(AuthContext);

  const logout = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="navbar bg-base-300 md:px-12">
      <div className="flex-1   ">
        <Link to="/" className="navigationBar-navLink-title btn btn-ghost normal-case text-xl">
          Sakura Chef
        </Link>
      </div>
      <div className="flex-none">
        <div className="navigationBar-navLink space-x-3 pe-3 font-semibold">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-700" : "defaultColor"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-700" : "defaultColor"
            }
            to="/blog"
          >
            Blog
          </NavLink>
          {user && (
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-blue-700" : "defaultColor"
              }
              to="/favoriteRecipe"
            >
              Favorite Recipe
            </NavLink>
          )}
        </div>
        {user ? (
          <div className="flex items-center navigationBar-btn-container">
            <button
              onClick={logout}
              className="bg-blue-400  hover:bg-blue-600 duration-300 hover:text-white  text-center rounded-sm  px-3 py-1 font-semibold me-2 "
            >
              Logout
            </button>
            <Link to='/userDetails'>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
              <div className="w-10 rounded-full">
                <img title={user.displayName} src={user.photoURL} />
              </div>
            </label></Link>
          </div>
        ) : (
          <Link
            to="/login"
            className="bg-blue-400  hover:bg-blue-600 duration-300 hover:text-white  text-center rounded-sm  px-3 py-1 font-semibold me-2 "
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
