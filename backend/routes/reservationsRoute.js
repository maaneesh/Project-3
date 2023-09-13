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

router.route("/").get(protect, getReservations).post(protect, setReservation);

router
  .route("/:id")
  .put(protect, updateReservation)
  .delete(protect,  deleteReservation);

module.exports = router;
