import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../Firebase/firebase";

function BookNow() {
  const [error, setError] = useState({});

  const location = useLocation();
  const roomFromCard = location.state?.room;
  console.log(roomFromCard);

 const [formData, setFormData] = useState({
  name: "",
  mobile: "",
  email: "",
  checkIn: "",
  checkOut: "",
  address: "",
  roomType: roomFromCard?.roomType || localStorage.getItem("roomType") || "",
  pricePerNight:
    roomFromCard?.pricePerNight || localStorage.getItem("roomPricePerNight") || "",
  paymentMode: "",
  feedback: "",
});


  useEffect(() => {
    if (roomFromCard?.roomType) {
      console.log("here roomtype ", roomFromCard.roomType);
      setFormData((prev) => ({
        ...prev,
        roomType: roomFromCard.roomType,
        pricePerNight: roomFromCard.pricePerNight,
      }));
      localStorage.setItem("roomType", roomFromCard.roomType);
      localStorage.setItem("roomPricePerNight", roomFromCard.pricePerNight);
    }
  }, [roomFromCard]);

  /* 🔹 Validation */
  const validate = () => {
    const e = {};

    if (!formData.name.trim()) e.name = "Name is required";
    else if (formData.name.length < 3)
      e.name = "Name must be at least 3 characters";

    if (!/^\d{10}$/.test(formData.mobile))
      e.mobile = "Enter 10 digit mobile number";

    if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = "Enter valid email";

    if (!formData.checkIn) e.checkIn = "Check-in required";
    if (!formData.checkOut) e.checkOut = "Check-out required";

    if (
      formData.checkIn &&
      formData.checkOut &&
      formData.checkOut <= formData.checkIn
    )
      e.checkOut = "Check-out must be after check-in";

    if (!formData.address.trim()) e.address = "Address required";
    if (!formData.roomType) e.roomType = "Select room type";
    if (!formData.pricePerNight) e.pricePerNight = "Select price ";
    if (!formData.paymentMode) e.paymentMode = "Select payment mode";

    setError(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      // 🔹 Store in Firestore
      await addDoc(collection(db, "bookings"), formData);

      alert("Booking Submitted Successfully ✅");

      // Clear form
      setFormData({
        name: "",
        mobile: "",
        email: "",
        checkIn: "",
        checkOut: "",
        address: "",
        roomType: "",
        pricePerNight: "",
        paymentMode: "",
        feedback: "",
      });
      setError({});
      localStorage.removeItem("roomType");
      localStorage.removeItem("roomPricePerNight");
    } catch (err) {
      console.error("Error storing booking:", err);
      alert("Failed to submit booking ");
    }
  };
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="text-center mb-4">Hotel Booking Form</h3>

              <form onSubmit={handleSubmit}>
                {/* Name */}
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className={`form-control ${error.name && "is-invalid"}`}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <div className="invalid-feedback">{error.name}</div>
                </div>

                {/* Mobile */}
                <div className="mb-3">
                  <label className="form-label">Mobile</label>
                  <input
                    type="tel"
                    className={`form-control ${error.mobile && "is-invalid"}`}
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                  <div className="invalid-feedback">{error.mobile}</div>
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className={`form-control ${error.email && "is-invalid"}`}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <div className="invalid-feedback">{error.email}</div>
                </div>

                {/* Dates */}
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Check In</label>
                    <input
                      type="date"
                      className={`form-control ${
                        error.checkIn && "is-invalid"
                      }`}
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                    />
                    <div className="invalid-feedback">{error.checkIn}</div>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Check Out</label>
                    <input
                      type="date"
                      className={`form-control ${
                        error.checkOut && "is-invalid"
                      }`}
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleChange}
                    />
                    <div className="invalid-feedback">{error.checkOut}</div>
                  </div>
                </div>

                {/* Address */}
                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <textarea
                    className={`form-control ${error.address && "is-invalid"}`}
                    rows="2"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                  <div className="invalid-feedback">{error.address}</div>
                </div>

                {/* Room Type */}
                <div className="mb-3">
                  <label className="form-label">Room Type</label>
                  <select
                    className={`form-select ${error.roomType && "is-invalid"}`}
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                  >
                    <option value="">Select Room</option>
                    <option value="Deluxe Room">Deluxe Room</option>
                    <option value="Suite Room">Suite Room</option>
                    <option value="Standard Room">Standard Room</option>
                    <option value="Luxury Room">Luxury Room</option>
                  </select>
                  <div className="invalid-feedback">{error.roomType}</div>
                </div>

                {/* priceper Night */}

                <div className="mb-3">
                  <label className="form-label">Price / Night</label>
                  <input
                    type="text"
                    className="form-control"
                    value={`₹${formData.pricePerNight}`}
                    readOnly
                  />
                </div>

                {/* Payment */}
                <div className="mb-3">
                  <label className="form-label">Payment Mode</label>
                  <select
                    className={`form-select ${
                      error.paymentMode && "is-invalid"
                    }`}
                    name="paymentMode"
                    value={formData.paymentMode}
                    onChange={handleChange}
                  >
                    <option value="">Select Payment</option>
                    <option value="Cash">Cash</option>
                    <option value="Online">Online</option>
                  </select>
                  <div className="invalid-feedback">{error.paymentMode}</div>
                </div>

                {/* Feedback */}
                <div className="mb-3">
                  <label className="form-label">Feedback</label>
                  <textarea
                    className="form-control"
                    rows="2"
                    name="feedback"
                    value={formData.feedback}
                    onChange={handleChange}
                  />
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Book Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookNow;
