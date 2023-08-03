import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import HomeBtn from "../components/HomeBtn";

// import {QUERY_RESTAURANTS} from '../utils/queries';

function RestaurantCards() {
  // const {loading, data} = useQuery(QUERY_RESTAURANTS);
  //const restaurants = data?.restaurants || [];

  return (
    {/*map through restaurant array
    loading ? (
            <div>Loading...</div>
        ) : restaurants.map((restaurant) =>(
        <div className="restCardCont">
        <div className="restaurantCard">
        //will have to change route and maybe the a tag to Link
        <a href="restaurant.id" className="restCardLink">
          {restaurant.name}
        </a>
        <p className="restCardp">
          {restaurant.description}
        </p>
        <HomeBtn as={Link} to="/">
          Order Now
        </HomeBtn>
      </div>
      </div>
    )*/}
  );
}

export default RestaurantCards;
