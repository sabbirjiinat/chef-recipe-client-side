import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Recipe = ({ recipe }) => {
  const [disabledButton,setDisabledButton] = useState(false)
  console.log(recipe);
  const { name, ingredients, cookingMethod, rating, image_url } = recipe;
  const handleFavorite = () => {
    toast("Added to your favorite recipe !!");
    setDisabledButton(true)
  };
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
          <div className="inline-flex items-center justify-center gap-2">
            <p className="text-base font-semibold text-gray-600">Rating : </p>
            <Rating
              style={{ maxWidth: 120 }}
              value={Math.round(rating.number)}
              readOnly
            />
            <p className="text-lg font-semibold text-gray-600">
              {rating.number}
            </p>
          </div>
        </div>
        <p className="text-base text-gray-800">
          <span className="font-bold text-base text-gray-600">
            Cooking Method :{" "}
          </span>
          {cookingMethod.slice(0, 200)}...
        </p>
        <div className="card-actions justify-end">
          <button
            onClick={handleFavorite}
            disabled={disabledButton}
            className={`bg-blue-400 text-xl hover:bg-blue-600 duration-300 hover:text-white block text-center rounded-sm w-full px-3 py-1 font-semibold ${disabledButton && 'bg-gray-600 hover:bg-gray-600 hover:text-current'} `}
          >
            Favorite
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Recipe;
