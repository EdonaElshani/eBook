import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import bookLogo from "../Fotografite/SVG/Book-Logo.svg";
import axios from "axios";

const Navbar = ({ isLoggedin, setIsLoggedin }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/current-user", { withCredentials: true })
      .then((response) => {
        console.log('response', response);
        setUser(response.data);
      })
      .catch((err) => console.log(err));
  }, [isLoggedin]);

  const handleLogout = () => {
    axios
      .post("http://localhost:8000/logout", {}, { withCredentials: true })
      .then((response) => {
        console.log(response);
        setUser(null);
      })
      .catch((err) => console.log(err));
  };
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <img src={bookLogo} alt="Book Logo" className="logoImg mx-2" />
        <a className="navbar-brand" href="#">
          eBook
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
          <form className="d-flex">
            <div className=" ">
              {user ? (
                <div className="d-flex">
                  <p className="px-2 pt-2">Hello: {user.username}</p>
                  <button
                    onClick={handleLogout}
                    className="btn-sm btn btn-outline-success"
                    >
                    Logout
                  </button>
                </div>
              ) : (
                <ul className="navbar-nav ">
                  <li className="nav-item me-1">
                    <NavLink
                      to="/register"
                      className="nav-link btn btn-outline-success"
                    >
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/login"
                      className="nav-link btn btn-outline-success"
                    >
                      Login
                    </NavLink>
                  </li>
                </ul>
              )}
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
