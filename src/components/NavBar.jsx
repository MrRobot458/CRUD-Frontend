import React from "react";
import "./NavBarStyles.css";
import { NavLink } from "react-router";
 
const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink to = "/">Home</NavLink>
      <NavLink to = "/campuses">All Campuses</NavLink>
      <NavLink to ="/students">All Students</NavLink>
    </nav>
  );
};

export default NavBar;
