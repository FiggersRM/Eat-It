import React from "react";
import { Link } from 'react-router-dom';
import HomeBtn from '../components/HomeBtn';

// import {QUERY_RESTAURANTS} from '../utils/queries';

const Home = () => {
  // const {loading, data} = useQuery(QUERY_RESTAURANTS);
  //const restaurants = data?.restaurants || [];

  return (
    <div>
      <h1 className="homeHeader">Restaurants</h1>
      <div className="restCardCont">
        <div className="restaurantCard">
            {/*will have to change route and maybe the a tag to Link */}
            <a href="restaurant.id" className="restCardLink">My restaurant</a>
            <p className="restCardp">A description of my restaurant with some extra space for extra lines mmmmmmmmm mmmmmmmmmmmmmmmmmmmmmm</p>
            <HomeBtn as={Link} to="/">Order Now</HomeBtn>
        </div>
        <div className="restaurantCard">
            {/*will have to change route and maybe the a tag to Link */}
            <a href="restaurant.id" className="restCardLink">My restaurant</a>
            <p className="restCardp">A description of my restaurant with some extra space for extra lines mmmmmmmmm mmmmmmmmmmmmmmmmmmmmmm</p>
            <HomeBtn as={Link} to="/">Order Now</HomeBtn>
        </div>
        <div className="restaurantCard">
            {/*will have to change route and maybe the a tag to Link */}
            <a href="restaurant.id" className="restCardLink">My restaurant</a>
            <p className="restCardp">A description of my restaurant with some extra space for extra lines mmmmmmmmm mmmmmmmmmmmmmmmmmmmmmm</p>
            <HomeBtn as={Link} to="/">Order Now</HomeBtn>
        </div>
        <div className="restaurantCard">
            {/*will have to change route and maybe the a tag to Link */}
            <a href="restaurant.id" className="restCardLink">My restaurant</a>
            <p className="restCardp">A description of my restaurant with some extra space for extra lines mmmmmmmmm mmmmmmmmmmmmmmmmmmmmmm</p>
            <HomeBtn as={Link} to="/">Order Now</HomeBtn>
        </div>
        <div className="restaurantCard">
            {/*will have to change route and maybe the a tag to Link */}
            <a href="restaurant.id" className="restCardLink">My restaurant</a>
            <p className="restCardp">A description of my restaurant with some extra space for extra lines mmmmmmmmm mmmmmmmmmmmmmmmmmmmmmm</p>
            <HomeBtn as={Link} to="/">Order Now</HomeBtn>
        </div>
        <div className="restaurantCard">
            {/*will have to change route and maybe the a tag to Link */}
            <a href="restaurant.id" className="restCardLink">My restaurant</a>
            <p className="restCardp">A description of my restaurant with some extra space for extra lines mmmmmmmmm mmmmmmmmmmmmmmmmmmmmmm</p>
            <HomeBtn as={Link} to="/">Order Now</HomeBtn>
        </div>
        <div className="restaurantCard">
            {/*will have to change route and maybe the a tag to Link */}
            <a href="restaurant.id" className="restCardLink">My restaurant</a>
            <p className="restCardp">A description of my restaurant with some extra space for extra lines mmmmmmmmm mmmmmmmmmmmmmmmmmmmmmm</p>
            <HomeBtn as={Link} to="/">Order Now</HomeBtn>
        </div>
      </div>
    </div>
  );
}

export default Home;
