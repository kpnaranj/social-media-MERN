// Private libraries
const express = require("express");
const app = express();
// Public libraries
require("dotenv").config();
const PORT = process.env.PORT;
// Middlewares
const customMiddleWare = (req, res, next) => {
  console.log("this is a middleware");
  next();
};
app.use(customMiddleWare);
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/home",customMiddleWare, (req, res) => {
  res.send("Hello World from Home");
});
// Listening port server
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
