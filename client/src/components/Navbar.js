import React from "react";
import { Link } from "react-router-dom";

import Auth from "../utils/auth";

function Navbar() {
  const loggedIn = Auth.loggedIn();
  return (
    <div class="navbar">
      {loggedIn ? (
        <div classNme="navlink">Log Out</div>
      ) : (
        <Link to="/login" className="navlink">
          Login/Signup
        </Link>
      )}
      {loggedIn ? (
        <Link to="/dashboard" className="navlink">
          My Dashboard
        </Link>
      ) : (
        ""
      )}
      <Link to="/" className="navlink navlinkend">
        Home
      </Link>
    </div>
  );
}

export default Navbar;
