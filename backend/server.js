const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 50005;

//initialized express
const app = express();

//Routes

app.use("/api/reservations", require("./routes/reservationsRoute"));

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
