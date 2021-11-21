const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  DOB: {
    type: Date,
  },
  gender: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  Phone: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  accountType: {
    type: String,
  },
  amount: {
    type: Number,
    required: true,
  },
  employment: {
    type: String,
  },
});
const user = mongoose.model("bank-user", userSchema);

module.exports = user;
