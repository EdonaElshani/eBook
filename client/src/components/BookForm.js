import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";

const BookForm = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [noPage, setNoPage] = useState("");
  const [price, setPrice] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/book")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/book", {
        title,
        category,
        description,
        author,
        noPage,
        price
      }, {withCredentials: true},)
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.err.errors);
        setErrors(err.response.data.err.errors);
      });
  };

  return (
    <div className="container gradient shadow py-4 mt-2 rounded-3">
      <form
        className=" my-4 mx-auto bg-white form shadow-lg rounded-3 text-center"
        onSubmit={handleSubmit}
      >
        <div className="d-flex justify-content-center">
          <div className="flex-direction-column">
            <div className="mx-4 mt-4">
              <div className="form-group inputSize fw-bold">
                <label htmlFor="name">Book Title: </label>
                <input
                  type="text"
                  name="title"
                  value={title}
                  className="form-control text-center"
                  onChange={(e) => setTitle(e.target.value)}
                />

                {errors.title ? (
                  <p className="text-danger">{errors.title.message}</p>
                ) : null}
              </div>
              <div className="form-group inputSize fw-bold">
                <label htmlFor="description">Book Description: </label>
                <input
                  type="text"
                  name="description"
                  value={description}
                  className="form-control text-center"
                  onChange={(e) => setDescription(e.target.value)}
                />
                {errors.description ? (
                  <p className="text-danger">{errors.description.message}</p>
                ) : null}
              </div>
              <div className="form-group inputSize fw-bold">
                <label htmlFor="author">Author: </label>
                <input
                  type="text"
                  name="author"
                  value={author}
                  className="form-control text-center"
                  onChange={(e) => setAuthor(e.target.value)}
                />
                {errors.author ? (
                  <p className="text-danger">{errors.author.message}</p>
                ) : null}
              </div>

              <div className="form-group inputSize fw-bold">
                <label htmlFor="author">Number of Pages: </label>
                <input
                  type="number"
                  name="page"
                  value={noPage}
                  className="form-control text-center"
                  onChange={(e) => setNoPage(e.target.value)}
                />
                {errors.noPage ? (
                  <p className="text-danger">{errors.noPage.message}</p>
                ) : null}
              </div>
              <div className="form-group inputSize fw-bold">
              <label htmlFor="author">Price: </label>
              <input
                type="number"
                name="price"
                value={price}
                className="form-control text-center"
                onChange={(e) => setPrice(e.target.value)}
              />
               {errors.price ? (
                  <p className="text-danger">{errors.price.message}</p>
                ) : null}
            </div>
              <div className="form-group d-flex flex-column fw-bold mt-1 ">
                <label htmlFor="category">Category: </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  name="category"
                  className="inputSize fw-bold py-1 rounded text-center mt-1 p-1 "
                >
                  <option>Select Category: </option>
                  <option value="Romance">Romance</option>
                  <option value="Adventure">Adventure</option>
                  <option value="Contemporary">Contemporary</option>
                  <option value="Horror">Horror</option>
                  <option value="Self-help">Self-help</option>
                  <option value="Families & Relationships">
                    Families & Relationships
                  </option>
                  <option value="Motivational">Motivational</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <button type="submit" className="btn bg-purple m-4">
          Create Book
        </button>
      </form>
    </div>
  );
};

export default BookForm;
