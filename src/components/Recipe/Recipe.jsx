import React from "react";

const Recipe = ({ recipe }) => {
  // console.log(recipe);
  const { name, ingredients, cookingMethod, rating, image_url } = recipe;
  return (
    <div className="card card-compact shadow-2xl w-full">
      <figure>
        <img className="h-40 w-full object-cover" src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl">{name}</h2>
        <div>
          {ingredients.map((ingredient, index) => (
            <div key={index}>
              <p className="text-base font-bold text-gray-600">
                1 : {ingredient.first}
              </p>
              <p className="text-base font-bold text-gray-600">
                2 : {ingredient.second}
              </p>
              <p className="text-base font-bold text-gray-600">
                3 : {ingredient.third}
              </p>
              <p className="text-base font-bold text-gray-600">
                4 : {ingredient.fourth}
              </p>
              <p className="text-base font-bold text-gray-600">
                5 : {ingredient.fifth}
              </p>
            </div>
          ))}
        </div>
        <p className="text-base text-gray-800">
          <span className="font-bold text-base text-gray-600">Cooking Method : </span>{cookingMethod.slice(0, 200)}...
        </p>
        <div className="card-actions justify-end">
          <button className="bg-blue-400 text-xl hover:bg-blue-600 duration-300 hover:text-white block text-center rounded-sm w-full px-3 py-1 font-semibold ">
            Favorite
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
