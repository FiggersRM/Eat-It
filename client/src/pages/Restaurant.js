import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import { useState } from "react";

import { QUERY_RESTAURANT } from "../utils/queries";
import { ADD_MENU, DELETE_MENU } from "../utils/mutations";

import Auth from "../utils/auth";

function Restaurant() {
  const { restaurantId } = useParams();
  const [showMenuForm, setMenuForm] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    price: 0,
    description: "",
  });

  const [addMenu, { error }] = useMutation(ADD_MENU, {
    refetchQueries: [
      { query: QUERY_RESTAURANT, variables: { restaurantId: restaurantId } },
    ],
  });

  const [deleteMenu, { error: deleteError }] = useMutation(DELETE_MENU, {
    refetchQueries: [
      { query: QUERY_RESTAURANT, variables: { restaurantId: restaurantId } }
    ]
  })

  const { loading, data } = useQuery(QUERY_RESTAURANT, {
    variables: { restaurantId: restaurantId },
  });
  
  let user;
  let userId;
  if(Auth.loggedIn()) {
    user = Auth.getUser();
    userId = user.data._id;
  }
  let restUserId;
  let idComp;

  if (data) {
    // console.log(data);
    restUserId = data.restaurant.user._id;
    idComp = restUserId === userId;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "price") {
      let newValue = parseInt(value);
      setFormState({
        ...formState,
        [name]: newValue,
      });
    } else {
      setFormState({
        ...formState,
        [name]: value,
      });
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (formState.name && formState.description && formState.price) {
      try {
        const { data } = await addMenu({
          variables: { restaurantId: restaurantId, ...formState },
        });
        // console.log(data);
        setMenuForm(!showMenuForm);
        setFormState({
          name: "",
          price: 0,
          description: "",
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("Name, price, and description of menu item required");
    }
  };

  const handleDeleteMenuItem = (_id) => async (event) => {
    event.preventDefault();
    console.log(_id);
    try {
      const {data} = await deleteMenu({
        variables: {restaurantId: restaurantId, menuId: _id}
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      {loading ? (
        <div className="restLoading">Loading...</div>
      ) : (
        <div className="restContainer">
          <div className="restHeader">{data.restaurant.name}</div>
          <div className="restAddress">{data.restaurant.address}</div>
          {idComp ? (
            <div>
              {showMenuForm ? (
                <>
                  <form onSubmit={handleFormSubmit}>
                    <h1 className="dashH1">New Menu Item</h1>
                    <div className="restFormDiv">
                      <span className="inputLabel">Item Name: </span>
                      <input
                        className="inputBox"
                        placeholder="Item Name"
                        name="name"
                        type="name"
                        value={formState.name}
                        onChange={handleChange}
                      ></input>
                    </div>
                    <div className="restFormDiv">
                      <span className="inputLabel">Price: </span>
                      <input
                        className="inputBox"
                        placeholder="Item Price"
                        name="price"
                        type="number"
                        value={formState.price}
                        onChange={handleChange}
                      ></input>
                      <div className="restFormDiv">
                        <span className="inputLabel">Item Description: </span>
                        <input
                          className="inputBox"
                          placeholder="Item Description"
                          name="description"
                          type="description"
                          value={formState.description}
                          onChange={handleChange}
                        ></input>
                      </div>
                    </div>
                    <button className="formSubmitBtn" type="submit">
                      Create Menu Item
                    </button>
                    <button
                      className="cancelFormBtn"
                      type="submit"
                      onClick={() => setMenuForm(!showMenuForm)}
                    >
                      Cancel
                    </button>
                  </form>
                </>
              ) : (
                <div>
                  <button
                    className="addMenuBtn"
                    onClick={() => setMenuForm(!showMenuForm)}
                  >
                    Add a Menu Item
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div>{""}</div>
          )}
          <div className="menuItemDiv">
            {console.log(data)}
            {data.restaurant.menu.map((menuItem) => {
              return (
                <div className="menuCard">
                  <span className="menuName">{menuItem.name}</span>
                  <span className="menuDesc">{menuItem.description}</span>
                  <span className="menuPrice">Price : ${menuItem.price}</span>
                  {idComp ? (
                    <>
                    <button className="menuItemDeleteBtn" onClick={handleDeleteMenuItem(menuItem._id)}>Delete</button>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Restaurant;
