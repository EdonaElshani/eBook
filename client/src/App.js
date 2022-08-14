import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DisplayAll from "./components/DisplayAll";
import BookForm from "./components/BookForm";
import NotFound from "./components/NotFound";
import EditBook from "./components/EditBook";
import Details from "./components/Details";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import React, { useState } from "react";

function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin}/>
        <Routes>
          <Route path="/" element={<DisplayAll />} />
          <Route path="/new" element={<BookForm />} />
          <Route path="/NotFound" element={<NotFound />} />
          <Route path="/edit/:id" element={<EditBook />} />
          <Route path="/details/:id" element={<Details />} />
          <Route
            path="/login"
            element={<Login setIsLoggedin={setIsLoggedin} />}
          />
          <Route
            path="/register"
            element={<Register setIsLoggedin={setIsLoggedin} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
