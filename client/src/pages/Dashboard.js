import React, { useState } from "react";
import MyOrders from '../components/MyOrders';
import MyRestaurants from '../components/MyRestaurants'

function Dashboard() {
  const [currentPage, setCurrentPage] = useState("My-Orders");

  const handlePageChange = (page) => setCurrentPage(page);

  const renderPage = () => {
    if(currentPage === 'My-Orderes') {
      return <MyOrders />
    } else if (currentPage === 'My-Restaurants') {
      return <MyRestaurants />
    }
  }

  return (
    <div className="dashboard">
      <h1 className="dashHeader">My Dashboard</h1>
      <div className="dashNav">
      <a href="#My-Orders" onClick={() => handlePageChange('My-Orders')} style={{textDecoration: 'none'}}><h2 className="dashH2">Recent Orders</h2></a>
        {/* Add code to render my restaurants if a user is a manager */}
        <a href="#My-Restaurants" onClick={() => handlePageChange('My-Restaurants')} style={{textDecoration: 'none'}}><h2 className="dashH2">My Restaurants</h2></a>
      </div>
      <div className="dashContent">
        {renderPage()}
      </div>
    </div>
  );
}

export default Dashboard;
