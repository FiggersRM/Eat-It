import React from "react";
import { useState } from "react";
import { ADD_RESTAURANT, DELETE_RESTAURANT } from "../utils/mutations";
import { QUERY_USER_RESTAURANT } from '../utils/queries';
import { useParams, Link } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import HomeBtn from "./HomeBtn";

function MyRestaurants() {
  const { userId } = useParams();
  const [showForm, setShowForm] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    address: "",
    user: userId,
  });

  const [addRestaurant, { error }] = useMutation(ADD_RESTAURANT, {
    refetchQueries: [
      { query: QUERY_USER_RESTAURANT, variables: {userId: userId}},
    ]
  });

  const [deleteRestaurant, {error: deleteError}] = useMutation(DELETE_RESTAURANT, {
    refetchQueries: [
      { query: QUERY_USER_RESTAURANT, variables: {userId: userId}},
    ]
  });

  const { loading, data } = useQuery(QUERY_USER_RESTAURANT, {
    variables: {userId: userId}
  });

  if(data) {
    console.log(data);
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (formState.name && formState.address) {
      try {
        console.log(formState);
        const { data } = await addRestaurant({
          variables: { ...formState },
        });
        console.log(data);
        setShowForm(!showForm);
        setFormState({
          name: '',
          address: ''
        })
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("Name and address required to create a restaurant");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleDeleteRestaurant = (restId) => async (event) => {
    event.preventDefault();
    console.log(restId);
    alert('This restaurant will be permanently deleted');
    try {
      const { data } = deleteRestaurant({
        variables: { restaurantId: restId }
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      {showForm ? (
        <div>
          <form onSubmit={handleFormSubmit}>
            <h1 className="dashH1">New Restaurant</h1>
            <div className="restFormDiv">
              <span className="inputLabel">Restaurant Name: </span>
              <input
                className="inputBox"
                placeholder="Restaurant Name"
                name="name"
                type="name"
                value={formState.name}
                onChange={handleChange}
              ></input>
            </div>
            <div className="restFormDiv">
              <span className="inputLabel">Restaurant Address: </span>
              <input
                className="inputBox"
                placeholder="Restaurant Address"
                name="address"
                type="address"
                value={formState.address}
                onChange={handleChange}
              ></input>
            </div>
            <button className="formSubmitBtn" type="submit">
              Create Restaurant
            </button>
            <button className="cancelFormBtn" onClick={()=> setShowForm(!showForm)}>Cancel</button>
          </form>
        </div>
      ) : (
        <>
          <button className="addRestBtn" onClick={() => setShowForm(!showForm)}>
            Add a Restaurant
          </button>
        </>
      )}
      {loading ? (
        <div>
          Loading...
        </div>
      ) : (
        <>
          <h2 className="dashH2">My Restaurants</h2>
        <div className="restCardCont">
          {data.userRestaurant.map((restaurant) => {
            return (
              <div className="restaurantCard">
        <Link to={`/restaurant/${restaurant._id}`} className="restCardLink">
          {restaurant.name}
        </Link>
        <p className="restCardp">
          {restaurant.address}
        </p>
        <HomeBtn as={Link} to={`/restaurant/${restaurant._id}`}>
          View Restaurant
        </HomeBtn>
        <button className="deleteRestBtn" onClick={handleDeleteRestaurant(restaurant._id)}>Delete Restaurant</button>
      </div>
          )
          })}
        </div>
        </>
      )}
    </>
  );
}

export default MyRestaurants;
