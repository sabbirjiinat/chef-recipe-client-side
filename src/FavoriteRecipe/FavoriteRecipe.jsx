import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import LikedRecipe from '../components/LikedRecipe/LikedRecipe';

const FavoriteRecipe = () => {
    // const [recipes, setRecipes] = useState(null)
    const favoriteFoods = useLoaderData()
   
    return (
        <div>
            {favoriteFoods.map(favoriteFood => <LikedRecipe
                key={favoriteFood._id}
            favoriteFood={favoriteFood}
            ></LikedRecipe>)}
        </div>
    );
};

export default FavoriteRecipe;
