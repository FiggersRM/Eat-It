import React from "react";
import { Link } from "react-router-dom";

import Auth from "../utils/auth";

function Navbar() {
	const loggedIn = Auth.loggedIn();
	return (
		<div class="navbar">
			<Link to="/" className="navlink">
				Home
			</Link>
			{loggedIn ? (
				<Link to="/dashboard" className="navlink">
					My Dashboard
				</Link>
			) : (
				""
			)}
			{loggedIn ? (
				<div className="navlink navlinkend">Log Out</div>
			) : (
				<Link to="/login" className="navlink navlinkend">
					Login/Signup
				</Link>
			)}
		</div>
	);
}

export default Navbar;
