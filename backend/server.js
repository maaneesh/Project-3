const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT || 50005;

//initialized express
const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes

app.use("/api/reservations", require("./routes/reservationsRoute"));

app.use(errorHandler); //Override default error handling with our error handling middleware

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
