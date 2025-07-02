import React from "react";
import "./NavBarStyles.css";
import { NavLink } from "react-router";
 
const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink to = "/">Home</NavLink>
      <NavLink to = "/campuses">Campuses</NavLink>
      <NavLink to ="/students">Students</NavLink>
      <NavLink to ="/students">Faculty</NavLink>
      <NavLink to ="/students">Contact Us</NavLink>
    </nav>
  );
};

export default NavBar;
