import React from "react";
import { carousle } from "../../assets/assets";
import HotelBookingForm from "../Booking-Form/HotelBookingForm";

const captions = [
  {
    tag: "The Ultimate Hotel Experience",
    title: "Discover Your Perfect Gateway Destination",
    desc: "Unparalleled luxury and comfort await at the world's most executive hotels and resorts. Start your journey today",
  },
  {
    tag: "Luxury Redefined",
    title: "Experience World Class Hospitality",
    desc: "Indulge in premium services and breathtaking views at our exclusive hotels worldwide.",
  },
  {
    tag: "Book With Confidence",
    title: "Your Dream Stay Starts Here",
    desc: "Enjoy seamless booking, exclusive offers, and unmatched comfort at every destination.",
  },
];

const HeroBanner = () => {
  return (
    <div
      id="bannerCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      <div className="carousel-inner">
        {carousle.images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            {/* Background Image */}
            <img
              src={image}
              className="d-block w-100"
              alt={`Banner ${index + 1}`}
              style={{
                height: "85vh",
                objectFit: "cover",
                maxHeight: "700px",
              }}
            />

            {/* Dark Overlay */}
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

            {/* Caption Content */}
           <div className="carousel-caption d-flex align-items-center">
  <div className="container py-4 py-md-0">
    <div className="row align-items-center flex-column flex-md-row">

      <div className="col-12 col-md-6 text-center text-md-start text-white mb-4 mb-md-0">
        <p className="bg-primary bg-opacity-50 px-3 py-1 rounded-pill d-inline-block fs-6 fs-md-5 fs-lg-4">
          {captions[index].tag}
        </p>

        <h1 className="fw-bold mt-3 fs-3 fs-md-2 fs-lg-1">
          {captions[index].title}
        </h1>

        <p className="mt-3 fs-6 fs-md-5 fs-lg-4 text-white-50">
          {captions[index].desc}
        </p>
      </div>

      <div className="col-12 col-md-5">
        <HotelBookingForm />
      </div>

    </div>
  </div>
</div>

          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#bannerCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#bannerCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};

export default HeroBanner;
