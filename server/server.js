// Public libraries
const express = require("express");
const mongoose = require("mongoose");
// Initialize application
const app = express();
require("dotenv").config();
// Public variables
const port = process.env.LOCAL_PORT;
const db = process.env.MONGO_URI;
//Private libraries
const userRoutes = require("./routes/user");
// Mongo DB Database
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
mongoose.connection
  .on("error", (err) => {
    console.log(err);
  })
  .on("connected", () => {
    console.log(`Running on DB server ${db}`);
  });
// Middleware
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use("/api", userRoutes);
// Listening port
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
