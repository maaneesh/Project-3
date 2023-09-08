const asyncHandler = require("express-async-handler");

//@desc Get reservations
//@route GET /api/reservations/
//@access Private
const getReservations = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Read reservations GET" });
});

//@desc Set/Create a reservation
//@route POST /api/reservations/
//@access Private
const setReservation = asyncHandler(async (req, res) => {
  if (!req.body.service) {
    res.status(400);
    throw new Error("Please add a Service for reservation");
  }
  const service = req.body.service;
  res
    .status(200)
    .json({ message: `Create/set a reservation for ${service} POST` });
});

//@desc Update a reservation
//@route PUT /api/reservations/:id
//@access Private
const updateReservation = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update reservation PUT ${req.params.id}` });
});

//@desc Delete a reservation
//@route DELETE /api/reservations/:id
//@access Private
const deleteReservation = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: `Delete reservation DELETE ${req.params.id}` });
});

module.exports = {
  getReservations,
  setReservation,
  updateReservation,
  deleteReservation,
};
