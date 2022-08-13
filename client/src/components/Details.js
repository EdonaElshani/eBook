import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams , Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Details = () => {
  const [allBooks, setAllBooks] = useState([]);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [noPage, setNoPage] = useState("");
  const [bookNotFound, setbookNotFound] = useState("");

    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/book/${id}`)
        .then((response) => {
            console.log(response.data);
            setTitle(response.data.title);
            setDescription(response.data.description);
            setCategory(response.data.category);
            setAuthor(response.data.author);
            setNoPage(response.data.noPage);
            setAllBooks(response.data);
        })
        .catch((error) => {
            console.log(error);
            setbookNotFound("This Book does not exist in our database");
        })
    },[])



  const deleteBook = (idFromBelow) => {
      navigate("/");
  };



  return (
    <div className="border border-dark p-5">
      {/* Book not found */}
      {bookNotFound ? navigate("/NotFound") : null}
      {/*Book not found */}

      <div className="text-end">
        <Link to="/">Back To Home</Link>
      </div>

      <h2>Details about: {title}</h2>

      <div className="text-end">
      <button onClick={() => deleteBook(id)} className="btn btn-danger">
       Delete {title}
      </button>
      </div>

      <div className="d-flex mt-5">
        <h5 className="me-5 ">Book's Category: </h5>
        <p>{category}</p>
      </div>
      <div className="d-flex">
        <h5 className="me-5 ">Book's Description: </h5>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Details