import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout/Layout";
import Home from "../components/Home/Home";
import ChefDetailsWithRecipes from "../components/ChefDetailWithRecipes/ChefDetailsWithRecipes";

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
    ],
  },
]);

export default router;
