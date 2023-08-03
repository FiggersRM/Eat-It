import React from "react";
import { Link } from "react-router-dom";
import RestaurantCards from "../components/RestaurantCards";

const Home = () => {

  return (
    <div>
      <h1 className="homeHeader">Restaurants</h1>
      <RestaurantCards />
    </div>
  );
};

export default Home;
