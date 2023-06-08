const express = require("express");
const body_parser = require("body-parser");
const dotenv = require('dotenv');
const connectDB = require('./config/db')
const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const app = express();
app.use(body_parser.urlencoded({ extended: true }));
dotenv.config();
connectDB();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("App is running..");
});


app.use("/api/users", userRoutes)
app.use("/api/notes", noteRoutes)


app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
  console.log(`Server is running on PORT ${PORT}`);
});
