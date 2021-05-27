// Private libraries
const express = require("express");
const router = express.Router();
// Public libraries
const User = require("../models/user");
// Get Routes
router.get("/", (req, res) => {
  res.send("The route is working");
});
// Post Routes
router.post("/signup", (req, res) => {
  console.log(req.body);
});

// Export elements
module.exports = router;
