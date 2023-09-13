const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require('./config/db')
const port = process.env.PORT || 50005;

//initialized express
const app = express();

connectDB()

//Middleware
app.use(express.urlencoded({ extended: false }));

//Routes

app.use("/api/reservations", require("./routes/reservationsRoute"));
app.use("/api/users", require("./routes/userRoutes"));


app.use(errorHandler); //Override default error handling with our error handling middleware

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
