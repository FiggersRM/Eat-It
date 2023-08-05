import React from "react";
import { Link } from "react-router-dom";

import Auth from "../utils/auth";

function Navbar() {
	const loggedIn = Auth.loggedIn();
	const handleLogout = (event) => {
		event.preventDefault();
		Auth.logout();
	}
	let token;

	if (localStorage.getItem('id_token')) {
		token = Auth.getUser();
	}
	return (
		<div className="navbar">
			<Link to="/" className="navlink">
				Home
			</Link>
			{loggedIn ? (
				<Link to={`/dashboard/${token.data._id}`} className="navlink">
					My Dashboard
				</Link>
			) : (
				""
			)}
			{loggedIn ? (
				<button className="navlink navlinkend navBtn" onClick={handleLogout}>Log Out</button>
			) : (
				<Link to="/login" className="navlink navlinkend">
					Login/Signup
				</Link>
			)}
		</div>
	);
}

export default Navbar;
