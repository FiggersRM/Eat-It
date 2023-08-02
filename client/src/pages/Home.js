import React from "react";
import { useQuery } from "@apollo/client";

// import {QUERY_RESTAURANTS} from '../utils/queries';

function Home() {
  // const {loading, data} = useQuery(QUERY_RESTAURANTS);
  //const restaurants = data?.restaurants || [];

  return (
    <div>
      <h1 className="homeHeader">Restaurants</h1>
      {/*map through restaurant array*/}
      {/* loading ? (
            <div>Loading...</div>
        ) : (.map((restaurant) => {
            <RestaurantCard restaurant={restaurant} />
            )}*/}
      <div className="restCardCont">
        <div className="restaurantCard">
            {/*will have to change route and maybe the a tag to Link */}
            <a href="restaurant.id" className="restCardLink">My restaurant</a>
            <p className="restCardp">A description of my restaurant with some extra space for extra lines mmmmmmmmm mmmmmmmmmmmmmmmmmmmmmm</p>
            <button className="restCardBtn">Order Now</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
