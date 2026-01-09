import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBookings,
  deleteBooking,
  updateBooking,
} from "../../redux/bookingSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { list, loading } = useSelector((state) => state.bookings);

  const [editId, setEditId] = useState(null);
  const [editPayment, setEditPayment] = useState("");

  useEffect(() => {
    dispatch(fetchBookings());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Delete this booking?")) {
      dispatch(deleteBooking(id));
    }
  };

  const handleEdit = (booking) => {
    setEditId(booking.id);
    setEditPayment(booking.paymentMode);
  };

  const handleUpdate = (id) => {
    dispatch(updateBooking({ id, data: { paymentMode: editPayment } }));
    setEditId(null);
  };

  return (
    <div className="container my-5">
      <h3 className="text-center mb-4">Admin Booking Dashboard</h3>

      {loading && <p>Loading...</p>}

      <div className="table-responsive">
        <table className="table table-bordered table-striped align-middle">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Room</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Price</th>
              <th>Payment</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {list.map((b) => (
              <tr key={b.id}>
                <td>{b.name}</td>
                <td>{b.roomType}</td>
                <td>{b.checkIn}</td>
                <td>{b.checkOut}</td>
                <td>₹ {b.pricePerNight}</td>

                <td>
                  {editId === b.id ? (
                    <select
                      className="form-select"
                      value={editPayment}
                      onChange={(e) => setEditPayment(e.target.value)}
                    >
                      <option>Cash</option>
                      <option>Online</option>
                    </select>
                  ) : (
                    b.paymentMode
                  )}
                </td>

                <td>
                  {editId === b.id ? (
                    <button
                      className="btn btn-success btn-sm me-2"
                      onClick={() => handleUpdate(b.id)}
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => handleEdit(b)}
                    >
                      Edit
                    </button>
                  )}

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(b.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {list.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center">
                  No Bookings Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
