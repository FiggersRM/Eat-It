import React from "react";
import bg from "./images/eat-it-high-resolution-logo-color-on-transparent-background.png";
import Navbar from "./Navbar";

const Header = () => {
	return (
		<div className="header">
			<div>
				<img src={bg} alt="" className="headerimg" />
			</div>
      <div className="headerNav">
			  <Navbar />
      </div>

		</div>
	);
};

export default Header;
