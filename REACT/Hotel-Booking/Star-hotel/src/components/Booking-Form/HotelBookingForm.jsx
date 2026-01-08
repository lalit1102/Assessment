import { useState } from "react";

const HotelBookingForm = () => {
  const [booking, setBooking] = useState({
    name: "",
    checkIn: "",
    checkOut: "",
    guests: 0,
    roomType: "Deluxe",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooking({ ...booking, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Details:", booking);
    alert("Booking Submitted Successfully ✅");
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h4 style={styles.title}>Book Your Stay</h4>

      <input type="text" name="name" placeholder="Guest Name"
        value={booking.name} onChange={handleChange}
        style={styles.input} required />

      <input type="date" name="checkIn"
        value={booking.checkIn} onChange={handleChange}
        style={styles.input} required />

      <input type="date" name="checkOut"
        value={booking.checkOut} onChange={handleChange}
        style={styles.input} required />

      <input type="number" name="guests" min="1"
        value={booking.guests} onChange={handleChange}
        style={styles.input} />

      <select name="roomType"
        value={booking.roomType} onChange={handleChange}
        style={styles.input}>
        <option value="Deluxe">Deluxe</option>
        <option value="Suite">Suite</option>
        <option value="Standard">Standard</option>
      </select>

      <button type="submit" style={styles.button}>
        Check Availability
      </button>
    </form>
  );
};

const styles = {
  form: {
    background: "rgba(255, 255, 255, 0.1)", 
    backdropFilter: "blur(8px)",             
    WebkitBackdropFilter: "blur(8px)",        
    padding: "25px",
    borderRadius: "14px",
    width: "100%",
    maxWidth: "380px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
  },
  title: {
    textAlign: "center",
    marginBottom: "15px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    background: "rgba(255,255,255,0.9)", 
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default HotelBookingForm;
