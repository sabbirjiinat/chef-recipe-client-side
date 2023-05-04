import { getMyFavoriteRecipe } from "../fakeDb/fakeDb";

const favoriteProduct = async () => {
  const products = await fetch(
    "https://react-firebase-chef-recipe-server-site-sabbirjiinat.vercel.app/recipe"
  );
  const allProducts = await products.json();

  const storedRecipe = getMyFavoriteRecipe();

  let newArray = [];
  for (const id in storedRecipe) {
    const findFavoriteRecipe = allProducts.find((recipe) => recipe._id == id);

    if (findFavoriteRecipe) {
      newArray.push(findFavoriteRecipe);
    }
  }
  return newArray;
};

export default favoriteProduct;
