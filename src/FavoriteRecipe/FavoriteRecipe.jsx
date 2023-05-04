import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import LikedRecipe from "../components/LikedRecipe/LikedRecipe";
import { removeFromDb } from "../fakeDb/fakeDb";

const FavoriteRecipe = () => {
  const favoriteFoods = useLoaderData();
  const [recipes, setRecipes] = useState(favoriteFoods);

  const handleRemoveFavoriteItem = (id) => {
    const removeDeleteItem = recipes.filter((recipe) => recipe._id != id);
    setRecipes(removeDeleteItem);
    removeFromDb(id);
  };

  return (
    <div>
      {recipes.map((favoriteFood) => (
        <LikedRecipe
          key={favoriteFood._id}
          favoriteFood={favoriteFood}
          handleRemoveFavoriteItem={handleRemoveFavoriteItem}
        ></LikedRecipe>
      ))}
    </div>
  );
};

export default FavoriteRecipe;
