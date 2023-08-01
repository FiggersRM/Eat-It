import React, { useEffect } from "react";
import bg from "./images/eat-it-high-resolution-logo-color-on-transparent-background.png";

function Header() {

  return (
      <div className="header">
          <img src={bg} alt="" className="headerimg" />
      </div>
  );
}

export default Header;