import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext)
  const logout = () => {
    logOut()
      .then()
      .catch(error => {
      console.log(error);
    })
  }


    return (
        <div className="navbar bg-base-300 md:px-12">
        <div className="flex-1">
          <Link className="btn btn-ghost normal-case text-xl">Sakura Chef</Link>
        </div>
        <div className="flex-none">
                <div className='space-x-3 pe-3 font-semibold'>
                <NavLink className={({isActive}) =>isActive ? 'text-blue-700' : 'defaultColor'} to='/'>Home</NavLink>
                <NavLink className={({isActive}) =>isActive ? 'text-blue-700' : 'defaultColor'} to='/blog'>Blog</NavLink>
            </div>
          {user ? <div className='flex items-center'>
            <button onClick={logout} className="bg-blue-400  hover:bg-blue-600 duration-300 hover:text-white  text-center rounded-sm  px-3 py-1 font-semibold me-2 ">
          Logout
        </button>
      
           <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
       
            <div className="w-10 rounded-full">
        
                <img src={user.photoURL} />
              </div> 
            </label>
            </div> :     <Link to='/login' className="bg-blue-400  hover:bg-blue-600 duration-300 hover:text-white  text-center rounded-sm  px-3 py-1 font-semibold me-2 ">
          Login
        </Link>}
           
        
        </div>
      </div>
    );
};

export default NavigationBar;