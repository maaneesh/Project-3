const asyncHandler = require("express-async-handler");
const Reservation = require("../models/reservationModel");
const User = require("../models/userModel");

//@desc Get reservations
//@route GET /api/reservations/
//@access Private
const getReservations = asyncHandler(async (req, res) => {
  const reservations = await Reservation.find({ user: req.user.id });
  res
    .status(200)
    .json({ message: "Read reservations GET returns", reservations });
});

//@desc Set/Create a reservation
//@route POST /api/reservations/
//@access Private
const setReservation = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error("Please add a name for reservation");
  } else if (!req.body.service) {
    res.status(400);
    throw new Error("Please add a Service for reservation");
  }

  const reservation = await Reservation.create({
    name: req.body.name,
    user: req.user.id,
    number: req.body.number,
    service: req.body.service,
  });

  res.status(200).json(reservation);
  //   { message: `Create/set a reservation for ${service} POST`, service }
});

//@desc Update a reservation
//@route PUT /api/reservations/:id
//@access Private
const updateReservation = asyncHandler(async (req, res) => {
  const reservation = await Reservation.findById(req.params.id);

  if (!reservation) {
    res.status(400);
    throw new Error("Reservation not found");

    const user = await User.findById(req.user.id);

    //Check for user
    if (!user) {
      res.status(401);
      throw new Error("User not found");
    }
  }
  //Confirm that logged in user matches the reservation user
  if (reservation.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedReservation = await Reservation.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  //   res.status(200).json({ message: `Update reservation PUT ${req.params.id}`});
  res.status(200).json(updatedReservation);
});

//@desc Delete a reservation
//@route DELETE /api/reservations/:id
//@access Private
const deleteReservation = asyncHandler(async (req, res) => {
  const reservation = await Reservation.findById(req.params.id);
  if (!reservation) {
    res.status(400);
    throw new Error("Reservation not found");
  }
  await reservation.deleteOne();

  res
    .status(200)
    .json({ message: `Delete reservation ${req.params.id}` });
});

module.exports = {
  getReservations,
  setReservation,
  updateReservation,
  deleteReservation,
};
