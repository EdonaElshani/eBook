import React from "react";

const Slider = () => {
  return (
    <div className="container my-4">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item">
            <img
              src="https://quotefancy.com/media/wallpaper/3840x2160/15478-Margaret-Fuller-Quote-Today-a-reader-tomorrow-a-leader.jpg"
              className="d-block w-100 sliderImg"
              alt="First Quote"
            />
          </div>
          <div className="carousel-item active">
            <img
              src="https://quotefancy.com/media/wallpaper/3840x2160/84197-Neale-Donald-Walsch-Quote-Life-begins-at-the-end-of-your-comfort.jpg"
              className="d-block w-100 sliderImg"
              alt="Second Quote"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://quotefancy.com/media/wallpaper/3840x2160/4056-Ernest-Hemingway-Quote-There-is-no-friend-as-loyal-as-a-book.jpg"
              className="d-block sliderImg w-100"
              alt="Third quote"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
