import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

const EditPet = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [noPage, setNoPage] = useState("");
  const [price, setPrice] = useState("");
  const [bookNotFound, setbookNotFound] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/book/${id}`)
      .then((response) => {
        console.log(response.data);
        setTitle(response.data.title);
        setDescription(response.data.description);
        setCategory(response.data.category);
        setAuthor(response.data.author);
        setNoPage(response.data.noPage);
        setPrice(response.data.price);
      })
      .catch((error) => {
        console.log(error);
        setbookNotFound("This Book does not exist in our database");
      });
  }, []);
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/book/${id}`, {
        title,
        category,
        description,
        author,
        noPage,
        price
      })
      .then((response) => {
        console.log(response.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response.data.err.errors);
        setErrors(err.response.data.err.errors);
      });
  };

  return (
    <div className="container gradient shadow py-5 mt-2 rounded-3 mb-3">
      {/* Book not found */}
      {bookNotFound ? navigate("/NotFound") : null}

      <form className="mx-auto bg-white form shadow-lg rounded-3 text-center" onSubmit={submitHandler}>
        <div className="d-flex flex-direction-column">
          <div className="mx-auto">
            <div className="form-group inputSize">
              <label htmlFor="name" className="fw-bold mt-3">
                Book Title
              </label>
              <input
                type="text"
                className="form-control text-center"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              {errors.name ? (
                <p className="text-danger">{errors.title.message}</p>
              ) : null}
            </div>
            <div className="form-group inputSize">
              <label htmlFor="description" className="fw-bold mt-2">
                Book Description
              </label>
              <input
                type="text"
                name="description"
                placeholder="description"
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
            </div>
            <div className="form-group inputSize fw-bold">
              <label htmlFor="author">Number of Pages: </label>
              <input
                type="number"
                name="page"
                placeholder="Number of Pages"
                value={noPage}
                className="form-control text-center"
                onChange={(e) => setNoPage(e.target.value)}
              />
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
        <button className="btn bg-purple m-4">
         Edit Book
        </button>
      </form>
    </div>
  );
};

export default EditPet;
