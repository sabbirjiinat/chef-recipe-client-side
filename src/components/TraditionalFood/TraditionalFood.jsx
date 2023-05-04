import React from 'react';
import { FaShoppingCart } from "react-icons/fa";


const TraditionalFood = ({ traditionalFood }) => {
  
    const { image,name, description } = traditionalFood;
    return (
        <div className="card w-full glass">
        <figure><img className='h-44 w-full object-cover' src={image} alt="car!"/></figure>
        <div className="card-body pt-1 pl-1">
                <h2 className="card-title text-gray-700 text-xl font-semibold">{ name}</h2>
                <p className='text-gray-700'>{ description.slice(0,200)}</p>
          <div className="card-actions justify-end">
            <button className="bg-sky-600 px-2 py-1 rounded-sm text-xl hover:bg-sky-800 flex items-center gap-3 hover:text-white duration-300 font-semibold">
              <FaShoppingCart></FaShoppingCart>
              Place Order</button>
          </div>
        </div>
      </div>
    );
};

export default TraditionalFood;