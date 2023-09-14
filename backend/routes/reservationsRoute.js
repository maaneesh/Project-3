const express = require("express");
const router = express.Router();
const {
  getReservations,
  setReservation,
  updateReservation,
  deleteReservation,
} = require("../controllers/reservationsController");

const { protect } = require("../middleware/authMiddleware");
//Routes. Call appropriate functions from controller dile

router.route("/").get( getReservations).post( setReservation);

router
  .route("/:id")
  .put(updateReservation)
  .delete( deleteReservation);

module.exports = router;
