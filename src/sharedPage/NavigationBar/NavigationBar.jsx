import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div className="navbar bg-base-300 md:px-12">
        <div className="flex-1">
          <Link className="btn btn-ghost normal-case text-xl">Sakura</Link>
        </div>
        <div className="flex-none">
                <div className='space-x-3 pe-3 font-semibold'>
                <NavLink className={({isActive}) =>isActive ? 'text-blue-700' : 'defaultColor'} to='/'>Home</NavLink>
                <NavLink className={({isActive}) =>isActive ? 'text-blue-700' : 'defaultColor'} to='/blog'>Blog</NavLink>
            </div>
                
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
           
          </div>
        </div>
      </div>
    );
};

export default NavigationBar;