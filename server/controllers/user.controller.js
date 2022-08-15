const User = require("../models/user.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = 'supersecret';

const register = async (req, res) => {
  try {
    const user = new User(req.body);
    const newUser = await user.save();
    console.log("User created: " + newUser);
    const userToken = jwt.sign(
      { _id: newUser._id, email: newUser.email, userName: newUser.username },
      SECRET
    );
    console.log("JWT:" + userToken);
    res
      .status(201)
      .cookie("userToken", userToken, {
        expires: new Date(Date.now() + 900000),
      })
      .json({ successMessage: "User created successfully", user: newUser });
  } catch (error) {
    console.log("Registration failed: " + error);
    res.status(400).json(error);
  }
};

const login = async (req, res) => {
  const userDocument = await User.findOne({ email: req.body.email });
  console.log("Userdoc: " + userDocument);
  if (!userDocument) {
    res.status(400).json({ error: "Invalid email/password" });
  } else {
    try {
      const isPasswordValid = await bcrypt.compare(
        req.body.password,
        userDocument.password
      );
      if (!isPasswordValid) {
        res.status(400).json({ error: "Invalid email/password" });
      } else {
        const userToken = jwt.sign(
          {
            _id: userDocument._id,
            email: userDocument.email,
            userName: userDocument.username,
          },
          SECRET
        );
        console.log("JWT:" + userToken);
        res
          .status(201)
          .cookie("userToken", userToken, {
            expires: new Date(Date.now() + 900000),
          })
          .json({
            successMessage: "User loged in successfully",
            user: userDocument,
          });
      }
    } catch (error) {
      console.log("Login failed: " + error);
      res.status(400).json({ error: "Invaid email/password" });
    }
  }
};

const logout = (req, res) => {
  res.clearCookie("userToken");
  res.json({ successMessage: "User logged out" });
};

const getLoggedInUser = async (req, res) => {
  try {
    const user = jwt.verify(req.cookies.userToken, SECRET);
    const currentUser = await User.findOne({ _id: user._id });
    res.json(currentUser);
  } catch (error) {
    res.status(401).json({ error });
  }
};

module.exports = {
    register,
    login,
    logout,
    getLoggedInUser
};