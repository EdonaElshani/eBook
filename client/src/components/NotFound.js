import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
        <div className="alert alert-danger my-4">
        <h5>"This Book does not exist in our Library"</h5>
        <br></br>
      <Link to="/new">Click here to add a book</Link>
      </div>
    </div>
  )
}

export default NotFound