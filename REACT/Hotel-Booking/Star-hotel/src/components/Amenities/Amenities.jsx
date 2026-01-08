import React from "react";
import { roomsData } from "../../assets/assets";


const Amenities = () => {
  return (
    <div className="py-5 bg-light">
      <div className="container">
        {/* Page Title */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Amenities & Features</h2>
          <p className="text-muted">
            Explore all the services and facilities we offer to make your stay comfortable and memorable.
          </p>
        </div>

        {/* Rooms & Amenities */}
        <div className="row g-4">
          {roomsData.map((room) => (
            <div className="col-12 col-md-6 col-lg-4" key={room.id}>
              <div className="card h-100 shadow-sm">
                {/* Room Image */}
                <img
                  src={room.image[0]}
                  className="card-img-top"
                  alt={room.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />

                {/* Card Body */}
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{room.name}</h5>
                  <p className="fw-bold text-primary mb-2">{room.price}</p>

                  <h6 className="mt-3">Amenities:</h6>
                  <ul className="list-unstyled text-muted mb-3">
                    {room.features.map((feat, idx) => (
                      <li key={idx}>✔ {feat}</li>
                    ))}
                  </ul>

                  <button className="btn btn-primary mt-auto">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Amenities;
