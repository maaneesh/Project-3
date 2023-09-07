const express = require("express");
const router = express.Router();
const {
  getReservations,
  setReservation,
  updateReservation,
  deleteReservation,
} = require("../controllers/reservationsController");

//Routes. Call appropriate functions from controller dile 

router.get("/", getReservations);
router.post("/", setReservation);
router.put("/:id", updateReservation);
router.delete("/:id", deleteReservation);

module.exports = router;
