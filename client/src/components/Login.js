import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedin }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
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
      .post("http://localhost:8000/login", user, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        setIsLoggedin(true);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container gradient shadow py-5 mt-2 rounded-3">
      <form onSubmit={handleSubmit} className="my-4 mx-auto bg-white form shadow-lg rounded-3 text-center">
      <h2 className="pt-3 text-purple bw-bold">Login</h2>
        <div className="d-flex justify-content-center flex-column mx-5 pt-3">
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
</div>
      <button type="submit" className="btn bg-purple m-4">Login</button>
      </form>
    </div>
  );
};

export default Login;
