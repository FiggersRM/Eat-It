import React, { useState } from "react";

function Dashboard() {
  const [currentPage, setCurrentPage] = useState("My-Orders");

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="dashboard">
      <h1 className="dashHeader">My Dashboard</h1>
      <div className="dashNav">
      <a href="#My-Orders" onClick={handlePageChange} style={{textDecoration: 'none'}}><h2 className="dashH2">Recent Orders</h2></a>
        {/* Add code to render my restaurants if a user is a manager */}
        <a href="#My-Restaurants" onClick={handlePageChange} style={{textDecoration: 'none'}}><h2 className="dashH2">My Restaurants</h2></a>
      </div>
    </div>
  );
}

export default Dashboard;
