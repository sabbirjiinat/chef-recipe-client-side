import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 mt-5 text-white md:p-10">
      <div className="flex flex-col md:flex-row justify-center items-center md:items-baseline gap-10 ">
        <div>
          <h3 className="text-2xl font-bold my-3">SakuraChef</h3>
          <p className="my-3 text-gray-300 text-sm">
            A chef is a professional cook and <br /> tradesman who is proficient
            in all <br /> aspects of food preparation.
          </p>
          <img
            className="my-3 w-36 cursor-pointer"
            src="https://i.ibb.co/M2YbMKN/Group9969.png"
            alt=""
          />
        </div>
        <div>
          <h4 className="text-lg my-2 font-bold">Chef</h4>
          <p className="my-2 text-gray-300  md:text-sm">Sakura</p>
          <p className="my-2 text-gray-300  md:text-sm">Japanese</p>
          <p className="my-2 text-gray-300  md:text-sm">view all</p>
        </div>
        <div>
          <h4 className="text-lg my-2 font-bold">Restaurants</h4>
          <p className="my-2 text-gray-300  md:text-sm">
            Midori Japanese Restaurant
          </p>
          <p className="my-2 text-gray-300  md:text-sm">
            Izumi Japanese Kitchen
          </p>
          <p className="my-2 text-gray-300  md:text-sm">
            Sumo Sushi Restaurant
          </p>
          <p className="my-2 text-gray-300  md:text-sm">Sushi Tei Bangladesh</p>
        </div>
        <div>
          <h4 className="my-2 font-bold text-lg ">Support</h4>
          <p className="my-2  text-gray-300  md:text-sm">Help Desk</p>
          <p className="my-2  text-gray-300  md:text-sm">Recipes</p>
          <p className="my-2  text-gray-300  md:text-sm">Become a Partner</p>
          <p className="my-2  text-gray-300  md:text-sm">Order</p>
        </div>
        <div>
          <h4 className="my-2 font-bold text-lg">Contact</h4>
          <p className="my-2 text-gray-300  md:text-sm">524 Japan , NYC</p>
          <p className="my-2 text-gray-300  md:text-sm">+1 777 - 978 - 5570</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between  items-center md:items-baseline mt-5  px-10 py-2">
        <p className="text-sm">@2023 SakuraChef. All Rights Reserved</p>
        <p className="text-sm mt-5 md:mt-0">Powered By SakuraChef</p>
      </div>
    </footer>
  );
};

export default Footer;
