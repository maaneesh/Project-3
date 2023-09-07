

//@desc Get reservations
//@route GET /api/reservations/
//@access Private
const getReservations = (req, res) => {
  res.status(200).json({ message: "Read reservations GET" });
};


//@desc Set/Create a reservation
//@route POST /api/reservations/
//@access Private
const setReservation= (req, res) => {
    res.status(200).json({message: "Create/set a reservation POST"});
  };
  

//@desc Update a reservation
//@route PUT /api/reservations/:id
//@access Private
const updateReservation= (req, res) => {
    res.status(200).json({message:  `Update reservation PUT ${req.params.id}`});
  };

//@desc Delete a reservation
//@route DELETE /api/reservations/:id
//@access Private
const deleteReservation= (req, res) => {
    res.status(200).json({message:  `Delete reservation DELETE ${req.params.id}`});
  };  
  


module.exports = {
  getReservations,
  setReservation,
  updateReservation,
  deleteReservation

};
