// Private libraries
const express = require("express");
const mongoose = require("mongoose");
const app = express();
// Public libraries
require("dotenv").config();
const PORT = process.env.PORT;
const db = process.env.MONGO_URI;
// MongoDB database
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
mongoose.connection
  .on("error", () => {
    console.log("We are not connected to the server");
  })
  .on("connected", () => {
    console.log(`We are connected to the server ${db}`);
  });
// Middlewares
const customMiddleWare = (req, res, next) => {
  console.log("this is a middleware");
  next();
};
app.use(customMiddleWare);
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/home", customMiddleWare, (req, res) => {
  res.send("Hello World from Home");
});
// Listening port server
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
