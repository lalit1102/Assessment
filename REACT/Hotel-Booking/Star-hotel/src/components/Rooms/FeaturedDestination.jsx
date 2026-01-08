import React from "react";
// import { useNavigate } from "react-router-dom";

import HotelCard from "./HotelCard";
import { roomsDummyData } from "../../assets/assets";

const FeaturedDestination = () => {
  // const navigate = useNavigate();

  return (
    <div className="py-5 bg-light">
      <div className="container text-center">

        {/* Title */}
        <h2 className="fw-bold">Featured Destination</h2>
        <p className="text-muted mb-4">
          Discover our handpicked selection of exceptional properties around
          the world, offering unparalleled luxury and unforgettable experiences
        </p>

        {/* Cards Row */}
        <div className="row justify-content-center g-4 mt-4">
          {roomsDummyData.slice(0, 4).map((room, index) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3"
              key={room._id}
            >
             
              <HotelCard room={room} index={index} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-5">
          <button
            className="btn btn-outline-secondary"
           
          >
            View All Destinations
          </button>
        </div>

      </div>
    </div>
  );
};

export default FeaturedDestination;
