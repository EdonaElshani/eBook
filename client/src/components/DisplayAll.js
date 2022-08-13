import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";
import Accordion from "./Accordion";

const DisplayAll = (props) => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/book")
      .then((response) => {
        console.log(response.data);
        setAllBooks(response.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  const handleDelete = (idfromBelow) => {
    axios
      .delete(`http://localhost:8000/api/book/${idfromBelow}`)
      .then((res) => {
        console.log(res.data);
        setAllBooks(allBooks.filter((book, index) => book._id !== idfromBelow));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container">
      <div>
        <div className="header-section rounded">
          <h1 className="text-uppercase">Expand Your Knowledge</h1>
          <p className="fw-bold">
            Explore new worlds from the most famous authors
          </p>
          <a className="btn bg-purple">Read More</a>
        </div>
        <h4 className="pt-5 text-center">List of Books</h4>
        <div className="d-flex gap-5 my-5 flex-wrap justify-content-center">
          {allBooks.map((books, index) => {
            return (
              <div className="card text-white" key={books._id}>
                <img src={books.imgPath} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{books.title}</h5>
                  <p className="card-text">Category: {books.category}</p>
                  <p className="card-text">Price: {books.price}$</p>
                  <div className="d-flex">
                    <Link to={`/edit/${books._id}`} className="btn btn-primary">
                      Edit
                    </Link>
                    <Link
                      to={`/details/${books._id}`}
                      className="btn btn-secondary mx-2"
                    >
                      Details
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(books._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Accordion />
    </div>
  );
};

export default DisplayAll;
