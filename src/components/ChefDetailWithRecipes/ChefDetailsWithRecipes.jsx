import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Recipe from "../Recipe/Recipe";

const ChefDetailsWithRecipes = () => {
  const [recipes, setRecipes] = useState(null);
  const chefDetails = useLoaderData();
  const { picture, name, id, likes, experience, recipeCategory, description } =
    chefDetails;
  //   console.log(chefDetails);
  useEffect(() => {
    fetch(
      `https://react-firebase-chef-recipe-server-site.vercel.app/recipe/${id}`
    )
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div>
      <div className="md:flex md:justify-center items-center gap-7 px-5 md:px-12  mt-6">
        <div className="md:w-2/4 mb-4 md:mb-0">
          <img
            className="h-80 w-full rounded-md shadow-2xl object-cover"
            src={picture}
            alt=""
          />
        </div>
        <div className="card md:w-2/4  h-80 bg-base-300 shadow-2xl">
          <div className="card-body pt-2 ps-4">
            <h2 className="card-title text-4xl font-bold">{name}</h2>

            <p className="text-lg text-gray-700 font-semibold">{description}</p>
            <div className="mt-3">
              <p className="font-semibold text-gray-600">Likes : {likes}</p>
              <p className="font-semibold text-gray-600">
                Recipes : {recipeCategory}
              </p>
              <p className="font-semibold text-gray-600">
                Experience : {experience}
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="mt-14 text-center text-4xl font-bold">
        Famous Recipe's Of <span className="text-blue-600">{name}</span>
      </h1>
      <div className="md:px-12 my-20 md:my-10 grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {recipes?.map((recipe) => (
          <Recipe key={recipe._id} recipe={recipe}></Recipe>
        ))}
      </div>
    </div>
  );
};

export default ChefDetailsWithRecipes;
