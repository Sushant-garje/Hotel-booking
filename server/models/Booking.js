// Storing the booking data in the database.

import mongoose from "mongoose";
import Hotel from "./Hotel.js";

const bookingSchema = new mongoose.Schema(
  {
    user: { type: String, ref: "User", required: true }, //Here we will store all the data of the user from the "User" Model.
    room: { type: String, ref: "Room", required: true },
    hotel: { type: String, ref: "Hotel", required: true },
    checkInDate: { type: Date, required: true },
    checkOutDate: { type: Date, required: true },
    totalPrice: { type: Number, required: true },
    guests: { type: Number, required: true },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending",
    },
    paymentMethod: {
      type: String,
      required: true,
      default: "Pay At Hotel",
    },
    isPaid: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema); // "Booking" is the Model Name

export default Booking;

//   Now to Store the Data in the Data Base We Need APIs, And to create the Api first we need to create the Controller Function