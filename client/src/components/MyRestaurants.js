import React from "react";
import { useState } from "react";
import { ADD_RESTAURANT } from '../utils/mutations';
import { useParams } from "react-router-dom";
import { useMutation } from "@apollo/client";

function MyRestaurants() {
  const [showForm, setShowForm] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    address: "",
  });
  const [addRestaurant, {error, data}] = useMutation(ADD_RESTAURANT);

  const { userId } = useParams();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (formState.name && formState.address) {
      try {
        console.log(formState, userId);
        const { data } = await addRestaurant({
        variables: {...formState, user: userId}
      });
      console.log(data);
      setShowForm(!showForm);
    } catch (err) {
      alert('Oops! Something went wrong');
    }
    } else {
      alert('Name and address required to create a restaurant');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

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
          </form>
        </div>
      ) : (
        <>
          <button className="addRestBtn" onClick={() => setShowForm(!showForm)}>
            Add a Restaurant
          </button>
        </>
      )}
    </>
  );
}

export default MyRestaurants;
