import ErrorHandler from "../error/error.js";
import Reservation from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
  try {
    const { firstName, lastName, email, phone, date, time } = req.body;

    if (!firstName || !lastName || !email || !phone || !date || !time) {
      return next(new ErrorHandler("Please fill all reservation fields", 400));
    }

    await Reservation.create({
      firstName,
      lastName,
      email,
      phone,
      date,
      time,
    });

    return res.status(201).json({
      success: true,
      message: "Reservation sent successfully",
    });

  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        err => err.message
      );
      return next(new ErrorHandler(validationErrors.join(", "), 400));
    }

    next(error);
  }
};
