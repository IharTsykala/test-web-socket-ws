const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  login: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
})

const User = mongoose.model("Users", userSchema)

module.exports = User
