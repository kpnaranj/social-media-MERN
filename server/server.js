// Public libraries
const express = require("express");
//Private libraries
const userRoutes = require("./routes/user");
// Initialize application
const app = express();
// Public variables
require("dotenv").config();
const port = process.env.LOCAL_PORT;
// Middleware
app.use("/api", userRoutes);
// Listening port
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
