import React from 'react';
import { Link } from 'react-router-dom';

function Navbar () {
    return (
        <div class="navbar">
            <Link to="/login" className="navlink">
                Login/Signup
            </Link>
            <Link to="/dashboard" className="navlink">
                My Dashboard
            </Link>
            <Link to="/restaurants" className="navlink navlinkend">
                Restaurants
            </Link>
        </div>
    )
}

export default Navbar;