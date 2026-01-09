import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../Firebase/firebase";

/* 🔹 Fetch All Bookings */
export const fetchBookings = createAsyncThunk(
  "bookings/fetch",
  async () => {
    const snapshot = await getDocs(collection(db, "bookings"));
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  }
);

/* 🔹 Delete Booking */
export const deleteBooking = createAsyncThunk(
  "bookings/delete",
  async (id) => {
    await deleteDoc(doc(db, "bookings", id));
    return id;
  }
);

/* 🔹 Update Booking */
export const updateBooking = createAsyncThunk(
  "bookings/update",
  async ({ id, data }) => {
    await updateDoc(doc(db, "bookings", id), data);
    return { id, data };
  }
);

const bookingSlice = createSlice({
  name: "bookings",
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookings.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBookings.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addCase(deleteBooking.fulfilled, (state, action) => {
        state.list = state.list.filter(
          (item) => item.id !== action.payload
        );
      })
      .addCase(updateBooking.fulfilled, (state, action) => {
        const index = state.list.findIndex(
          (i) => i.id === action.payload.id
        );
        if (index !== -1) {
          state.list[index] = {
            ...state.list[index],
            ...action.payload.data,
          };
        }
      });
  },
});

export default bookingSlice.reducer;
