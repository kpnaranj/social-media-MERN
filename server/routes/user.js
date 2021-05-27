// Private libraries
const express = require("express");
const router = express.Router();
// Public libraries
// function elements
router.get("/", (req, res) => {
  res.send("The route is working");
});

module.exports = router;
