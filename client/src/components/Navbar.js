import React from "react";
import { Link } from "react-router-dom";

import Auth from "../utils/auth";

function Navbar() {
	const loggedIn = Auth.loggedIn();
	const handleLogout = (e) => {
		e.preventDefault();
		Auth.logout();
	}
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
				<a href='/' className="navlink navlinkend" onclick={handleLogout()}>Log Out</a>
			) : (
				<Link to="/login" className="navlink navlinkend">
					Login/Signup
				</Link>
			)}
		</div>
	);
}

export default Navbar;
