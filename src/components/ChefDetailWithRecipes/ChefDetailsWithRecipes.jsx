import React from "react";
import { useLoaderData } from "react-router-dom";

const ChefDetailsWithRecipes = () => {
  const chefDetails = useLoaderData();
  const { picture, name, id, likes, experience, recipeCategory, description } =
    chefDetails;
  console.log(chefDetails);
  return (
    <div className="md:flex md:justify-center items-center gap-7 px-5 md:px-12  mt-6">
      <div className="md:w-2/4 mb-4 md:mb-0">
        <img className="h-80 w-full rounded-md shadow-2xl object-cover" src={picture} alt="" />
      </div>
      <div className="card md:w-2/4  h-80 bg-base-300 shadow-2xl">
        <div className="card-body pt-2 ps-4">
                  <h2 className="card-title text-4xl font-bold">{ name}</h2>
                 
                  <p className="text-lg text-gray-700 font-semibold">{description}</p>
                  <div className="mt-3">
                  <p className="font-semibold text-gray-600">Likes : { likes}</p>
                  <p className="font-semibold text-gray-600">Recipes : { recipeCategory}</p>
                  <p className="font-semibold text-gray-600">Experience : { experience}</p>
                </div>
          <div className="card-actions justify-end">
          <button  className="bg-blue-400 text-base hover:bg-blue-600 duration-300 hover:text-white block text-center rounded-sm w-full px-3 py-1 font-semibold ">Favorite</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefDetailsWithRecipes;
