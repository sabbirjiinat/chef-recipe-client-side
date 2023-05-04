import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout/Layout";
import Home from "../components/Home/Home";
import ChefDetailsWithRecipes from "../components/ChefDetailWithRecipes/ChefDetailsWithRecipes";
import Register from "../sharedPage/Register/Register";
import Login from "../sharedPage/Login/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Blog from "../components/Blog/Blog";
import FavoriteRecipe from "../FavoriteRecipe/FavoriteRecipe";
import favoriteProduct from "../FavoriteProductLoader/FavoriteProductLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/chef/:id",
        element: (
          <PrivateRoute>
            <ChefDetailsWithRecipes></ChefDetailsWithRecipes>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://react-firebase-chef-recipe-server-site.vercel.app/chef/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/favoriteRecipe",
        element: <FavoriteRecipe></FavoriteRecipe>,
        loader: favoriteProduct,
      },
    ],
  },
]);

export default router;
