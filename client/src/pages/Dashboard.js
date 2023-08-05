import React, { useState } from "react";
import MyOrders from "../components/MyOrders";
import MyRestaurants from "../components/MyRestaurants";
import { useParams } from "react-router-dom";

import { useQuery } from "@apollo/client";

import { QUERY_SINGLE_USER } from "../utils/queries";

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState("My-Orders");

  const handlePageChange = (page) => setCurrentPage(page);

  const { userId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_USER, {
    variables: { userId: userId },
  });
  console.log(data);
  let admin;
  if(data) {
    admin = data.user.role;
  }


  const renderPage = () => {
    if (currentPage === "My-Orderes") {
      return <MyOrders />;
    } else if (currentPage === "My-Restaurants") {
      return <MyRestaurants />;
    }
  };

  return (
    <div className="dashboard">
      <h1 className="dashHeader">My Dashboard</h1>
      { loading ? (
        <div>Loading ... </div>
        ) : (
          <>
      <div className="dashNav">
        <button
          href=""
          onClick={() => handlePageChange("My-Orders")}
          style={{ textDecoration: "none" }}
          className="dashBtn"
        >
          <h2 className="dashH2">Recent Orders</h2>
        </button>
        {data && admin === 'admin' ? (
        <button
          href=""
          onClick={() => handlePageChange("My-Restaurants")}
          style={{ textDecoration: "none" }}
          className="dashBtn"
        >
          <h2 className="dashH2">My Restaurants</h2>
        </button>
        ) : ''}
      </div>
      <div className="dashContent">{renderPage()}</div>
      </>
        )}
    </div>
  );
}

export default Dashboard;
