import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import cookingBanner from "../../../public/cookingBanner.json";
import Chef from "../Chef/Chef";
import Restaurants from "../Restaurants/Restaurants";
import { useLoaderData } from "react-router-dom";
import TraditionalFood from "../TraditionalFood/TraditionalFood";

const Home = () => {
  const [chefs, setChefs] = useState(null);
  const [restaurants, setRestaurants] = useState(null);
  const [traditionalFoods, setTraditionalFoods] = useState(null)
  const [data, setData] = useState(false)

  useEffect(() => {
    fetch("https://react-firebase-chef-recipe-server-site.vercel.app/chef")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);

  useEffect(() => {
    fetch(
      "https://react-firebase-chef-recipe-server-site.vercel.app/restaurants"
    )
      .then((res) => res.json())
      .then((data) => setRestaurants(data));
  }, []);

  useEffect(() => {
    fetch(
      "https://react-firebase-chef-recipe-server-site-sabbirjiinat.vercel.app/traditionalFood"
    )
      .then((res) => res.json())
      .then((data) => setTraditionalFoods(data));
  }, []);


  const handleSeeAll = () => {
    setData(true)
  }



  return (
    <div>
      <div className="md:flex md:items-center md:justify-center gap-6 md:px-12 md:p-10 bg-gray-100">
        <div className="md:w-2/4 shadow-2xl h-96 p-7 bg-gray-200 transform hover:-translate-y-4 duration-700">
          <h1 className="text-5xl">
            <span className="text-teal-700 font-bold">Sakura</span>{" "}
            <span className="text-gray-700 ">
              Japanese <span className="text-blue-600 font-bold">Chef</span>
            </span>
          </h1>
          <p className="mt-5 md:text-lg">
            A chef is a professional cook and tradesman who is proficient in all aspects of food preparation, often focusing on a particular cuisine.An itamae (板前, a cook, chef) is a cook in a Japanese kitchen or a chef of a large restaurant.
          </p>
        </div>
        <div className="md:w-2/4 shadow-2xl h-96 transform bg-gray-200 hover:-translate-y-4 duration-700">
          <Lottie animationData={cookingBanner} loop={true} />
        </div>
      </div>
      <h1 className="text-center text-4xl my-10 font-bold">
        Best <span className="text-blue-600">Chef</span> In Japan !!
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-6  md:justify-center md:items-center px-4 md:px-12 ">
        {chefs?.map((chef) => (
          <Chef key={chef.id} chef={chef}></Chef>
        ))}
      </div>
      <div className="mt-12">
        <h1 className="text-center text-4xl font-bold px-3">
          Do you want to feel the atmosphere of Japanese cuisine?
        </h1>
        <p className="text-center text-lg text-gray-600">
          Book Your Favorite Restaurant & Enjoy With Your Family !!!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 mt-12 md:px-12">
          {restaurants?.map((restaurant) => (
            <Restaurants
              key={restaurant.id}
              restaurant={restaurant}
            ></Restaurants>
          ))}
        </div>
      </div>
      <div>
        <h1 className="mx-5 animate-text bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent font-black lg:leading-tight text-3xl md:text-5xl  text-center my-12">Six Traditional Food You Must Try</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 mx-4   md:mx-12 gap-3">
        {traditionalFoods?.slice(0, data ? 6 : 3).map(traditionalFood => <TraditionalFood
          key={traditionalFood.id}
          traditionalFood={traditionalFood}
        >
          
        </TraditionalFood>)}
        </div>
   { !data && <div className="text-center my-7">
    <button onClick={handleSeeAll} className="bg-sky-600 px-2 py-1 rounded-sm text-xl hover:bg-sky-800 text-white duration-300 font-semibold">See All</button> 
       </div>}
    </div>
    </div>
  );
};

export default Home;
