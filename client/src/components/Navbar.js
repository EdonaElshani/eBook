import React from "react";
import { NavLink } from "react-router-dom";
import bookLogo from "../Fotografite/SVG/Book-Logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg mb-4">
      <img src={bookLogo} alt="Book Logo" className="logoImg mx-2" />
      <div className="container-fluid">
        <a className="navbar-brand text-purple" href="#">
          eBook
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link text-purple">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/new" className="nav-link text-purple">
                Create Book
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link text-purple" href="#categories">
                Categories
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-purple" href="#footer">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
