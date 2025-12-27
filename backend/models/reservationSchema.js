import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: [3, "First name must contain at least 3 characters"],
      maxLength: [30, "First name cannot exceed 30 characters"],
    },

    lastName: {
      type: String,
      required: true,
      minLength: [3, "Last name must contain at least 3 characters"],
      maxLength: [30, "Last name cannot exceed 30 characters"],
    },

    email: {
      type: String,
      required: true,
      validate: [validator.isEmail, "Provide a valid email"],
    },

    phone: {
      type: String,
      required: true,
      match: [/^[0-9]{11}$/, "Phone number must contain exactly 11 digits"],
    },

    time: {
      type: String,
      required: true,
    },

    date: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Reservation = mongoose.model("Reservation", reservationSchema);

export default Reservation;
