import React from "react";
import { hotelsvg } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const HotelCard = ({ room, index }) => {
  const navigate = useNavigate();
  const handleBookNow = () => {
    localStorage.setItem("roomType", room.roomType);
    localStorage.setItem("roomPricePerNight", room.pricePerNight);
    navigate("/book-now", { state: { room } });
  };

  return (
    <div className="card h-100 shadow-sm position-relative">
      
      <img
        src={room.images[0]}
        className="card-img-top"
        alt={room.roomType}
        style={{ height: "200px", objectFit: "cover" }}
      />

      {index % 2 === 0 && (
        <span className="position-absolute top-0 start-0 m-2 px-2 py-1 bg-white text-dark small rounded">
          Best Seller
        </span>
      )}

      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="mb-0">{room.roomType}</h5>

          <div className="d-flex align-items-center gap-1 small text-muted">
            ⭐ 4.5
          </div>
        </div>

        <p className="fw-bold text-primary mb-3">
          ₹{room.pricePerNight} / night
        </p>

        <button
          className="btn btn-outline-secondary btn-sm mt-auto"
          onClick={handleBookNow}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default HotelCard;
