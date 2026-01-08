import React from "react";
import { reviewsData } from "../../assets/assets";

const Review = () => {
  return (
    <div className="container py-5">
      {/* Header */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">Client Reviews</h2>
        <hr className="w-25 mx-auto" />
        <p className="text-muted">
          We are very proud of the services we offer to our customers.
          <br />
          Read every word from our happy customers.
        </p>
      </div>

      {/* Review Cards */}
      <div className="row g-4">
        {reviewsData.map((review) => (
          <div className="col-12 col-md-6 col-lg-4" key={review.id}>
            <div className="card h-100 text-center shadow-sm">
              <img
                src={review.image}
                alt={review.name}
                className="rounded-circle mx-auto mt-4"
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title fw-semibold">{review.name}</h5>
                <h6 className="text-muted mb-3">{review.location}</h6>
                <p className="card-text">{review.review}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
