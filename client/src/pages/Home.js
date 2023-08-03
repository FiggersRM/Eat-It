import React from "react";
import { Link } from "react-router-dom";
import RestaurantCards from "../components/RestaurantCards"

// import {QUERY_RESTAURANTS} from '../utils/queries';

const Home = () => {
  // const {loading, data} = useQuery(QUERY_RESTAURANTS);
  //const restaurants = data?.restaurants || [];

  return (
    <div>
      <h1 className="homeHeader">Restaurants</h1>
      <RestaurantCards />
    </div>
  );
};

export default Home;
