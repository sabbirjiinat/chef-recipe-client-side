import React from 'react';

const Chef = ({ chef }) => {
    console.log(chef);
    const { picture, name, description, likes,experience,recipeCategory } = chef;
  
    return (
       
            
             <div className="card card-compact w-full bg-base-100 shadow-2xl">
        <figure><img className='h-52 w-full object-cover' src={picture} alt="Shoes" /></figure>
        <div className="card-body">
                <h2 className="card-title">{ name}</h2>
                <div>
                <p className='text-base text-gray-600'>Experience : { experience}</p>
                <p className='text-base text-gray-600'>Recipes : { recipeCategory}</p>
                <p className='text-base text-gray-600'> Likes : { likes}</p>
                </div>
          <div className=" ">
            <button className="bg-blue-400 text-base hover:bg-blue-600 duration-300 hover:text-white rounded-sm w-full px-3 py-1 font-semibold ">View Recipes</button>
          </div>
        </div>
      </div>
       
    );
};

export default Chef;