// use local storage to manage cart data
const addToDb = id => {
    let favoriteRecipe = getFavoriteRecipe()
    // add quantity
    const quantity = favoriteRecipe[id]
    if (!quantity) {
        favoriteRecipe[id] = 1
    }
    else {
        const newQuantity = quantity + 1
        favoriteRecipe[id] = newQuantity
    }

    localStorage.setItem('favorite-recipe', JSON.stringify(favoriteRecipe))

}

const removeFromDb = id => {
    const favoriteRecipe = getFavoriteRecipe();
    if (id in favoriteRecipe) {
        delete favoriteRecipe[id];
        localStorage.setItem('favorite-recipe', JSON.stringify(favoriteRecipe));
    }
}

const getFavoriteRecipe = () => {
    let favoriteRecipe = {};

    const storedRecipe = localStorage.getItem('favorite-recipe')
    if (storedRecipe) {
        favoriteRecipe = JSON.parse(storedRecipe)
    }

    return favoriteRecipe;

}

const deleteFavoriteRecipe = () => {
    localStorage.removeItem('favorite-recipe');
}

export {
    addToDb,
    removeFromDb,
    getFavoriteRecipe as getMyFavoriteRecipe,
    deleteFavoriteRecipe
}
