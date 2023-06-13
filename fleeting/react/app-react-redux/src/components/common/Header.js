import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = {
    color: "#FFFFFF",
    background: "#DF3B57",
    padding: "10px",
    margin: "5px",
    borderRadius: "5px",
    fontWeight: "bold",
  };

  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} className="link-primary" exact>
        Home
      </NavLink>
      {"  |  "}
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
    </nav>
  );
};

export default Header;
