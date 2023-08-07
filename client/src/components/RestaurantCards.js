import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import HomeBtn from "../components/HomeBtn";

import {QUERY_RESTAURANTS} from '../utils/queries';

function RestaurantCards() {
  const {loading, data, error} = useQuery(QUERY_RESTAURANTS);
  const restaurants = data?.restaurants || [];

  if(error) {
    console.log(error);
  }

  return (
    <div className="restCardCont">
    {loading ? (
            <div>Loading...</div>
        ) : (
          <>
          {console.log(restaurants)}
          {restaurants.map((restaurant) => {
            return (
        <div className="restaurantCard">
        {/* //will have to change route and maybe the a tag to Link */}
        <a href={restaurant._id} className="restCardLink">
          {restaurant.name}
        </a>
        <p className="restCardp">
          {restaurant.address}
        </p>
        <HomeBtn as={Link} to={`/restaurant/${restaurant._id}`}>
          View Restaurant
        </HomeBtn>
      </div>
      
    )}
    )}
    </>
        )}
    </div>
  );
}

export default RestaurantCards;
