import React from "react";
// import {Link } from "react-router-dom";
import { Outlet,Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="header">
        <div className="container">
          <div className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        </div>
        </div>
      </nav>


      <Outlet />
    </>
  )
};

export default Header;