const mongoose = require("mongoose");

const reservationSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "Please add your name"],
    },
    email: {
      type: String,
     // required: [true, "Please add your email"],
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
