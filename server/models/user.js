// Private libraries
const mongoose = require("mongoose");
// Schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    hash_password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
// Export element
module.exports = mongoose.model("User", userSchema);
