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
  // Destructure elements
  const { firstName, lastName, email, userName, password } = req.body;
  // Check if user already exist
  User.findOne({ email: email })
    .then((user) => {
      // Check if user already exist, then
      if (user) {
        return res.status(422).json({
          error: "Email already exist, please try another email",
        });
      } 
      // Else, if user does not exist, then save parameters
      const _user = new User({
        firstName,
        lastName,
        email,
        userName,
        password,
      });
      // Send parameters and display result
      _user
        .save()
        .then((data) => {
          return res.status(200).json({
            user: data,
            message: "User created succesfully..!",
          });
        })
        .catch((err) => {
          console.log(err);
          return res.status(400).json({
            error: "Something went wrong, try again",
          });
        });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({
        error: "User cannot be found, try again",
      });
    });
});

// Export elements
module.exports = router;
