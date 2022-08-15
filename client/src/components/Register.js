import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = ({ setIsLoggedin }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/register", user, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        setIsLoggedin(true);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container gradient shadow py-4 mt-2 rounded-3">
      <form
        onSubmit={handleSubmit}
        className=" my-4 mx-auto bg-white form shadow-lg rounded-3 text-center"
      >
        <h2 className="pt-3 text-purple bw-bold">Register</h2>
        <div className="d-flex justify-content-center flex-column mx-5 pt-4">
          <div className="form-group inputSize fw-bold">
            <label htmlFor="username">Username</label>
            <input
              className="form-control text-center"
              type="text"
              name="username"
              value={user.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group inputSize fw-bold">
            <label htmlFor="email">Email</label>
            <input
              className="form-control text-center"
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group inputSize fw-bold">
            <label htmlFor="Password">Password</label>
            <input
              className="form-control text-center"
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group inputSize fw-bold">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              className="form-control text-center"
              type="password"
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button type="submit" className="btn bg-purple m-4">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
