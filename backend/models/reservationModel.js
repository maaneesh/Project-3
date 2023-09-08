const mongoose = require("mongoose");

const reservationSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add your name"],
    },
    email: {
      type: String,
      required: [true, "Please add your email"],
    },
    number: {
      type: Number,
    },
    service: {
      type: String,
      required: [true, "Please add a service"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Reservation", reservationSchema);
