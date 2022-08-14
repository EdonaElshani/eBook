import React from "react";
import comedy from "../Fotografite/SVG/Komedi.svg";
import fiction from "../Fotografite/SVG/Fiction.svg";
import history from '../Fotografite/SVG/Histori.svg';
import thriller from '../Fotografite/SVG/Triller.svg';

const Category = () => {
  return (
    <div className="container pb-2" id="categories">
    <h4 className="pt-5 text-center">Most Read Categories</h4>
    <div className='d-flex gap-5 my-5 flex-wrap justify-content-center'>
      <div className="card card-category">
        <img src={comedy} className="card-img-top categoryImg" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Comedy</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div className="card card-category">
        <img src={fiction} className="card-img-top categoryImg" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Fiction</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div className="card card-category">
        <img src={history} className="card-img-top categoryImg" alt="..." />
        <div className="card-body">
          <h5 className="card-title">History</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div className="card card-category">
        <img src={thriller} className="card-img-top categoryImg" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Self-help</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>

    </div>
  );
};

export default Category;
