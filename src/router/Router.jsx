import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout/Layout";
import Home from "../components/Home/Home";
import ChefDetailsWithRecipes from "../components/ChefDetailWithRecipes/ChefDetailsWithRecipes";
import Register from "../sharedPage/Register/Register";
import Login from "../sharedPage/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/chef/:id",
        element: <ChefDetailsWithRecipes></ChefDetailsWithRecipes>,
        loader: ({ params }) =>
          fetch(`http://localhost:5330/chef/${params.id}`),
        },
        {
            path: '/login',
            element:<Login></Login>
          
        },
        {
            path: '/register',
            element:<Register></Register>
        }
    ],
  },
]);

export default router;
