import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import { QUERY_RESTAURANT } from "../utils/queries";

import Auth from "../utils/auth";

function Restaurant() {
  const { restaurantId } = useParams();

  const { loading, data } = useQuery(QUERY_RESTAURANT, {
    variables: { restaurantId: restaurantId },
  });

  const user = Auth.getUser();
  const userId = user.data._id;
  let restUserId;
  let idComp;

  if (data) {
    console.log(data);
    restUserId = data.restaurant.user._id;
    idComp = restUserId === userId;
  }

  return (
    <>
      {loading ? (
        <div className="restLoading">Loading...</div>
      ) : (
        <div className="restContainer">
          <div className="restHeader">{data.restaurant.name}</div>
          <div className="restAddress">{data.restaurant.address}</div>
          <div className="menuItemDiv">
            <div className="menuCard">
                
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Restaurant;
