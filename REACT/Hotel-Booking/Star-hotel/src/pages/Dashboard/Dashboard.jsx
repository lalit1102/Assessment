import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/firebase";

function Dashboard() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "bookings"));
        console.log("querysnapshot data is...",querySnapshot )
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("finally data...",data)
        setBookings(data);
      } catch (err) {
        console.error("Error fetching bookings:", err);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div>
      <h3>All Bookings</h3>
      <ul>
        {bookings.map((b) => (
          <li key={b.id}>
            {b.name} - {b.roomType} - ₹{b.pricePerNight}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
